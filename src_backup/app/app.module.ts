import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { ErrorComponent } from './components/error/error.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddComponent } from './components/shopping-list/add/add.component';
import { BuyComponent } from './components/shopping-list/buy/buy.component';
import { PColorComponent } from './components/p-color/p-color.component';
import { SColorComponent } from './components/p-color/s-color/s-color.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    NavBarComponent,
    EventsComponent,
    CookiesComponent,
    ErrorComponent,
    ShoppingListComponent,
    AddComponent,
    BuyComponent,
    PColorComponent,
    SColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
