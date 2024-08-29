import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa componentes
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ReadComponent } from './components/read/read.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

// Configura rotas
const routes: Routes = [
  { path: 'home', component: WelcomeComponent }, // Rota para Home
  { path: 'create', component: CreateComponent }, // Rota para Create
  { path: 'read', component: ReadComponent },    // Rota para Read
  { path: 'edit/:id', component: EditComponent }, // Rota para Edit com ID
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona root para Home
  { path: '**', redirectTo: '/home' }, // Redireciona rotas desconhecidas para Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura RouterModule
  exports: [RouterModule], // Exporta RouterModule
})
export class AppRoutingModule {}
