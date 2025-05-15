import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoUsuarioComponent } from '../nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  {
    path:'nuevo-usuario', component: NuevoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

