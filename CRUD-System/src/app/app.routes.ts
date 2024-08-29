import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Importe seus componentes
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ReadComponent } from './components/read/read.component';

// Defina as rotas
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'read',
    component: ReadComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
