import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductType } from '../../types/product.type';
import { Observable, map, tap } from 'rxjs';
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ProductService {

  private url: string = 'https://testologia.ru/tea';
  private products: ProductType[] = [];

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductType[]>{
    return this.http.get<ProductType[]>(this.url);
  }
 
  public getProduct(id: number):  Observable<ProductType>{
      return this.http.get<ProductType>(`${this.url}?id=${id}`)
  }


}
