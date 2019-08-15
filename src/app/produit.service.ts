import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

 private baseUrl = 'http://localhost:8080/api/produits';
/*private http: HttpClien*/

  constructor(private httpc: HttpClient) { }


  createProduit(produit: any): Observable<any> {
  console.log(produit);
      return this.httpc.post(this.baseUrl, produit);
  }


  getProduitsList(): Observable<any> {
  console.log('Start 111111');
  var products = this.httpc.get(this.baseUrl);

  products.subscribe(p => console.log(p));


    return this.httpc.get(this.baseUrl);
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
