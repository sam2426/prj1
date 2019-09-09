import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private links = new Array<{ text: string, path: string }>();
  private isLoggedIn = new Subject<boolean>();

  constructor() { 
    this.addItem({text:'Home', path:'/home'});
    this.addItem({text:'SignUp', path:'/signup'});
    this.addItem({ text: 'Login', path: 'login' });
    this.isLoggedIn.next(false);
  }

  getLinks() {
    return this.links;
  }
 
  getLoginStatus() {
    return this.isLoggedIn;
  }

  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);
 
    if (!status) {
      this.clearAllItems();
      this.addItem({text:'Home', path:'/home'});
      this.addItem({text:'SignUp', path:'/signup'});
      this.addItem({ text: 'Login', path: 'login' });
    }
  }
 
  updateNavAfterAuth(role: string): void {
    // this.removeItem({ text: 'Home' });
    // this.removeItem({ text: 'Login' });
    // this.removeItem({ text: 'SignUp' });
    this.clearAllItems();
 
    if (role === 'user') {
      this.addItem({ text: 'Home', path: 'user-home' });
      this.addItem({ text: 'My ToDos', path: 'user-todos' });
      this.addItem({ text: 'Collaborate', path: 'user-friends-todos' });
      this.addItem({ text: 'Friends', path: 'user-friends' });
      this.addItem({ text: 'Logout', path: 'user-logout' });
    } else if (role === 'admin') {
      this.addItem({ text: 'Admin Board', path: 'admin' });
    }
  }

  addItem({ text, path }) {
    this.links.push({ text: text, path: path });
  }
 
  removeItem({ text }) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }
 
  clearAllItems() {
    this.links.length = 0;
  }
}
