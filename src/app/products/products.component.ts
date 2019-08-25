import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ProduitService } from '../produit.service';
import { Produit } from '../list-produit/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  produits: Observable<Produit[]>;
  constructor(private ss: ProduitService, private router :Router) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteProduit(id: number) {
    this.ss.deleteProduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  deleteProduits() {
    this.ss.deleteAllProduits()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.produits = this.ss.getProduitsList();
  }

updateProduit(produit){
    this.ss.setter(produit);
    this.router.navigate(['/op']);

}


}
