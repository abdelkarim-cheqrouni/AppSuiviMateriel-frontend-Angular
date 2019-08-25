import { Component, OnInit } from '@angular/core';
import { Produit } from '../list-produit/produit';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {
public produit: Produit;
  constructor(private ss: ProduitService, private router: Router) { }

  ngOnInit() {
    this.produit = this.ss.getter();
  }

  onSubmit(){
    if(this.produit.id == undefined){
      this.ss.createProduit(this.produit).subscribe((produit) => {
        console.log(produit);
        this.router.navigate(['/suivi']);
      }, (error) => {
        console.log(error);
      });
    } else {

        this.ss.updateProduit(this.produit).subscribe((produit) => {
          console.log(produit);
                  this.router.navigate(['/suivi']);
          
        }, (error) => {
          console.log(error);
        });


  }
  }}


