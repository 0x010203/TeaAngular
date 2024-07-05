import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0, 
      image: '',
      title: '',
      price: 0,
      description: '',
    };
   }

  ngOnInit(): void {
  }

}
