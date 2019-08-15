import { Component, OnInit, Input } from '@angular/core';
import { ProduitService } from '../produit.service';
import { ListProduitComponent } from '../list-produit/list-produit.component';
import { Produit } from '../list-produit/produit';


@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  @Input() produit: Produit;

  constructor(private ss: ProduitService, private LP: ListProduitComponent) { }

  ngOnInit() {
  }

  deleteProduit() {
    this.ss.deleteProduit(this.produit.id)
      .subscribe(
        data => {
          console.log(data);
          this.LP.reloadData();
        },
        error => console.log(error));
  }



}
