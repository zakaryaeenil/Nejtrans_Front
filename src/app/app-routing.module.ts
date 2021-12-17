import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from "./Login/login-form/login-form.component";
import {ToDoComponent} from "./App/to-do/to-do.component";
import {DashboardComponent} from "./Dashboard/dashboard.component";
import {AdminGuard} from "./Login/admin.guard";
import {ReturnGuard} from "./Login/return.guard";
import {ForgotformComponent} from "./Login/forgotform/forgotform.component";

const routes: Routes = [
  {path:'login',component:LoginFormComponent , canActivate: [AdminGuard]},
  {path:'todo',component:ToDoComponent  , canActivate: [ReturnGuard] },
  {path:'',component:DashboardComponent , canActivate: [ReturnGuard]},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) , canActivate: [ReturnGuard] },
  { path: 'dossiers', loadChildren: () => import('./dossiers/dossiers.module').then(m => m.DossiersModule)  , canActivate: [ReturnGuard]},
  {path : 'forgot' , component:ForgotformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
