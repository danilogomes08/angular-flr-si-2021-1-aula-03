import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'greeting', component: GreetingComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, GreetingComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
