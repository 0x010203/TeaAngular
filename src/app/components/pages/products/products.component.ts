import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductType[] = [];

  constructor(private productService: ProductService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(
      {
        next: (data)=>{
          this.products = data;
        },
        error: (error) =>{
          console.log(error);
          this.router.navigate(['/']);
        }
      }
      );
  }

}
