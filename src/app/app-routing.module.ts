import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { UserInstanceModule } from './user-instance/user-instance.module';
// import { ImageUploadModule } from './shared/image-upload/image-upload.module';

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
    UserInstanceModule,
    // ImageUploadModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
