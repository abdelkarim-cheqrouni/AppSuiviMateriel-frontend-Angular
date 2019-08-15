import { Component, OnInit } from '@angular/core';

import { ProduitService } from '../produit.service';
import { Produit } from '../list-produit/produit';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  produit: Produit = new Produit();
  submitted = false;

  constructor(private ss: ProduitService) { }

  ngOnInit() {
  }

  newProduit(): void {
    this.submitted = false;
    this.produit = new Produit();
  }

  save() {
    this.ss.createProduit(this.produit)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.produit = new Produit();
  }

  onSubmit() {
    this.save();
  }
}
