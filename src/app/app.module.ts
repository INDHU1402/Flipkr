import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockmarketComponent } from './stockmarket/stockmarket.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MatSliderModule} from '@angular/material/slider';
import { LoginComponent } from './login/login.component';

const appRoot: Routes = [{path:'signup', component: UsersignupComponent},
                         {path:'', component: StockmarketComponent},
                         {path:'login', component: LoginComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    StockmarketComponent,
    UsersignupComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    RouterModule,
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
