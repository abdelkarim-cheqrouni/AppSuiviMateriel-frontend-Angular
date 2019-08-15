import { Component, OnInit } from '@angular/core';

import { ProduitService } from '../produit.service';
import { Produit } from '../list-produit/produit';

@Component({
  selector: 'app-search-produit',
  templateUrl: './search-produit.component.html',
  styleUrls: ['./search-produit.component.css']
})
export class SearchProduitComponent implements OnInit {

  id: number;
  produits: Produit[];

  constructor(private dataService: ProduitService) { }

  ngOnInit() {

  }

  private searchProduits() {
    this.produits = [];
    this.dataService.getProduitsById(this.id)
      .subscribe(pr => this.produits = pr);
  }

  onSubmit() {
    this.searchProduits();
  }

}
