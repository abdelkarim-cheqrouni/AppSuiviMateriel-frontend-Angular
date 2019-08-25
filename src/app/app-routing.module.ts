import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { SearchProduitComponent } from './search-produit/search-produit.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';


const routes: Routes = [

  { path: '', redirectTo: 'produit', pathMatch: 'full' },
  { path: 'ajouterProduit', component: CreateProduitComponent },
  { path: 'suivi', component: ListProduitComponent },
  { path: 'rechercher', component: SearchProduitComponent },
  { path: 'produits', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'op', component: ProduitFormComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
