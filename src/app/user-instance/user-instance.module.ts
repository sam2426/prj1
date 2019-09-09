import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserTodosComponent } from './user-todos/user-todos.component';
import { UserFriendsTodosComponent } from './user-friends-todos/user-friends-todos.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback.component';

const routes: Routes = [
  {path:'user-home', component:UserHomeComponent},
  {path:'user-todos',component:UserTodosComponent},
  {path:'user-friends-todos',component:UserFriendsTodosComponent},
  {path:'user-friends',component:UserFriendsComponent},
  {path:'user-logout',component:UserLogoutComponent},
  {path:'user-feedback',component:UserFeedbackComponent}
 
];

@NgModule({
  declarations: [UserHomeComponent, UserTodosComponent, UserFriendsTodosComponent, UserFriendsComponent, UserLogoutComponent, UserFeedbackComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserInstanceModule { }
