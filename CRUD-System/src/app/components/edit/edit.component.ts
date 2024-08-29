import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Importa Router e ActivatedRoute

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adiciona CommonModule e FormsModule
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: any = {}; // Objeto do produto

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadProduct(); // Carrega o produto na inicialização
  }

  loadProduct(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtém ID da rota
    this.http.get<any>(`http://localhost:3000/api/obter/${id}`)
      .subscribe(data => {
        this.product = data; // Atualiza produto
        console.log('Produto carregado:', this.product);
      }, error => {
        console.error('Erro ao carregar produto:', error); // Log de erro
      });
  }

  saveProduct(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtém ID do produto
    this.http.put(`http://localhost:3000/api/editar/${id}`, this.product)
      .subscribe(() => {
        console.log('Produto atualizado com sucesso!');
        this.router.navigate(['/read']); // Navega para a página de leitura
      }, error => {
        console.error('Erro ao atualizar produto:', error); // Log de erro
      });
  }
}
