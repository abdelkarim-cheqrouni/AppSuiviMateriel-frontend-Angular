import { Component } from '@angular/core';
import { Produit } from './list-produit/produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public produit: Produit;

  title = ' Suivi du Matériel';
}
