import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./Login/login-form/login-form.component";
import {ToDoComponent} from "./App/to-do/to-do.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {AdminGuard} from "./Login/admin.guard";

const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'todo',component:ToDoComponent},
  {path:'',component:DashboardComponent},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'dossiers', loadChildren: () => import('./dossiers/dossiers.module').then(m => m.DossiersModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
