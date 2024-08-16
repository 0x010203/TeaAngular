import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { ProductType } from '../../../types/product.type';
import { Observable } from 'rxjs';
import { OrderType } from '../../../types/order.type';
import { ResponseOrderType } from '../../../types/response-order.type';
import { environment } from '../../../environments/environment';
@Injectable(
  {
  providedIn: 'root'
}
)
export class ProductService {

  //private url: string = 'https://testologia.ru/';
  private url: string = environment.apiUrl;
  //private products: ProductType[] = [];

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductType[]>{
    return this.http.get<ProductType[]>(this.url+'tea');
  }
 
  public getProduct(id: number):  Observable<ProductType>{
      return this.http.get<ProductType>(`${this.url}tea?id=${id}`)
  }

  public createOrder(order: OrderType):  Observable<ResponseOrderType>{
      return this.http.post<ResponseOrderType>(`${this.url}order-tea`, order);
  }


}
