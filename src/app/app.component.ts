import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './services/navbar.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { UserInstanceModule } from './user-instance/user-instance.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'todo-frontend';
// }

export class AppComponent implements OnInit {
 
  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;
 
  constructor(private router: Router, private navbarService: NavbarService) {
    // this.router.config.unshift(
    //   { path: 'login', component: LoginComponent },
    //   { path: 'user', component: UserComponent },
    //   { path: 'admin', component: AdminComponent },
    // );
  }
 
  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => this.isLoggedIn = status);
  }
 
  logout() {
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(['home']);
  }
}
