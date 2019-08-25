import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProduitService } from '../produit.service';
import { Produit } from './produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
s: string = "Hello2";

  produits: Observable<Produit[]>;
  products: Produit[];
  motCle: string="";
  constructor(private ss: ProduitService , private router :Router) { console.log(this.s);}

  ngOnInit() {


    this.reloadData();

  }
  reloadData() {

    this.produits = this.ss.getProduitsList();
    this.produits.subscribe(p => console.log(' comp' +p));


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




  updateProduit(produit){
    this.ss.setter(produit);
    this.router.navigate(['/op']);

}


}
