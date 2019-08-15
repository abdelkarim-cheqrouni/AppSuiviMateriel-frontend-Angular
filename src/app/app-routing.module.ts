import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { SearchProduitComponent } from './search-produit/search-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [

  { path: '', redirectTo: 'produit', pathMatch: 'full' },
  { path: 'ajouterProduit', component: CreateProduitComponent },
  { path: 'suivi', component: ListProduitComponent },
  { path: 'rechercher', component: SearchProduitComponent },
  { path: 'produits', component: ProductsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
