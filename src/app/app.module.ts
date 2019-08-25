import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { SearchProduitComponent } from './search-produit/search-produit.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    CreateProduitComponent,
    ListProduitComponent,

    SearchProduitComponent,
    ProductsComponent,
    HomeComponent,
    ProduitFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,

    HttpClientModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
