import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

const routes: Routes = [{path:'home', component:HomeComponent,pathMatch:'full'},
{path:'', redirectTo:'home', pathMatch:'full'},
{path:'*', component:HomeComponent},
{path:'**', component:HomeComponent},
{path:'not-found', component:NotFoundComponent}];

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    UserModule,
    TodoModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
