import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { SearchProduitComponent } from './search-produit/search-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ProductsComponent } from './products/products.component';






@NgModule({
  declarations: [
    AppComponent,
    CreateProduitComponent,
    ListProduitComponent,
    ProduitDetailsComponent,
    SearchProduitComponent,
    UpdateProduitComponent,
    ProductsComponent,


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
