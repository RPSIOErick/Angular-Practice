import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-read',
  standalone: true,
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  imports: [CommonModule]
})
export class ReadComponent implements OnInit {

  products: any[] = []; // Lista de produtos

  constructor(private http: HttpClient, private router: Router) {} // Injeta HttpClient e Router

  ngOnInit(): void {
    this.loadProducts(); // Carrega produtos na inicialização
  }

  loadProducts(): void {
    this.http.get<any[]>('http://localhost:3000/api/listar')
      .pipe(
        tap(data => console.log('Dados recebidos:', data)), // Log dos dados recebidos
        catchError(error => {
          console.error('Erro ao obter dados:', error); // Log de erro
          return of([]); // Retorna lista vazia em caso de erro
        })
      )
      .subscribe(data => this.products = data); // Atualiza lista de produtos
  }

  editProduct(id: string): void {
    console.log(`Editar produto com ID: ${id}`); // Log do ID do produto
    this.router.navigate([`/edit`, id]); // Navega para edição do produto
  }

  deleteProduct(id: string): void {
    console.log(`Excluir produto com ID: ${id}`); // Log do ID do produto

    this.http.delete(`http://localhost:3000/api/delete/${id}`)
      .pipe(
        tap(() => console.log('Produto excluído com sucesso!')), // Log de sucesso
        catchError(error => {
          console.error('Erro ao excluir produto:', error); // Log de erro
          return of(null);
        })
      )
      .subscribe(() => this.loadProducts()); // Recarrega produtos após exclusão
  }
}
