import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TodoBodyTreeComponent } from './shared/todo-body-tree/todo-body-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    // TodoBodyTreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      maxOpened:2,
      autoDismiss:true,
      preventDuplicates:true,
      countDuplicates:true,
      closeButton:true,
      timeOut: 2000,
      // positionClass: 'inline',
      // positionClass: 'toast-bottom-right',
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
