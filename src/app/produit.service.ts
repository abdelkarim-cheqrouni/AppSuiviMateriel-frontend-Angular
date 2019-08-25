import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './list-produit/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

 private baseUrl = 'http://localhost:8080/api/produits';
/*private http: HttpClien*/
private produit : Produit;

  constructor(private httpc: HttpClient) { }


  createProduit(produit: any): Observable<any> {
  console.log(produit);
      return this.httpc.post(this.baseUrl, produit);
  }
  updateProduit(produit: any): Observable<any> {
    console.log(produit);
        return this.httpc.put(this.baseUrl, produit);
    }



  getProduitsList(): Observable<any> {
  console.log('Start 111111');
  var products = this.httpc.get(this.baseUrl);

  products.subscribe(p => console.log(p));
    return this.httpc.get(this.baseUrl);
  }

  setter(produit: Produit) {

    this.produit = produit;
  }

  getter() {
    return this.produit;
  }
  getProduitById(id: number): Observable<any> {
    console.log('trouver un equipement par le id');

    return this.httpc.get(`${this.baseUrl}/id/${id}`);
  }

  getProduitspage(page, size): Observable<any> {


  console.log(this.httpc.get('http://localhost:8080/api/produits?page=${page}&size=${size}'));

  return    this.httpc.get('http://localhost:8080/api/produits?page=${page}&size=${size}');
  }
  deleteAllProduits(): Observable<any> {
    return this.httpc.delete(this.baseUrl);
  }


  getProduitsById(id: number): Observable<any> {
    return this.httpc.get(`${this.baseUrl}/get/${id}`);
  }
  deleteProduit(id: number): Observable<any> {
    return this.httpc.delete(`${this.baseUrl}/delete/${id}`);
  }



  }
