import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { AlertService, UserService } from './_services/index';


import { AppComponent } from './app.component';
import {ProductFilterPipe } from './products/product.custompipe';
//import { ProductService } from './products/product.service';
import{ ProductDetails } from './products/product-details.component';
import{ RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-guard.service';
import {Starcomponent } from './products/shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './products/product.service';
//import { RegisterComponent } from './register/register.component';
//import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductFilterPipe,
    LoginComponent, ProductDetails, Starcomponent, RegisterComponent,
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,
   // RouterModule.forRoot(appRoutes),
    RouterModule.forRoot([
      { path:'products', component: ProductListComponent },
      {path:'product/:id',
      canActivate:[ProductDetailGuard], component:ProductDetails},
      { path:'', component: ProductListComponent },
      //{ path: 'register', component: RegisterComponent },

      { path: '', component: ProductListComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
     // { path: 'register', component: RegisterComponent },
      { path: 'register1', component: RegisterComponent },
  
      // otherwise redirect to home
      { path: '**', redirectTo: '' }

    //  { path: 'login', loadChildren: './login/login.module#LoginModule' },


    ])
    // RouterModule.forRoot([], { useHash: true }),
  ],
  providers: [ProductService,ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
