import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { orderFormValidator } from 'src/app/functions/validators';
import { ProductService } from 'src/app/services/product.service';
import { OrderType } from 'src/types/order.type';
//import { controlValidator } from 'src/app/functions/validators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  private fioValidateString = '^[A-Za-zА-Яа-я]+$';
  private phoneValidateString = '^[\+]{0,1}[\\d]{11}$';
  private addressValidateString = '^[\\w\\s\-/а-яА-Я]+$';

  public isOrderSuccess: boolean = false; 
  public isOrderCreating: boolean = false; 
  

  // public formValues = {
  //   product : '',
  //   name: '',
  //   lastname: '',
  //   phone: '', 
  //   country: '',
  //   index: '',
  //   adress: '' ,
  //   comment: ''
  // }
  

  orderForm = new FormGroup(
    {
      product : new FormControl({value: '', disabled: true}, [Validators.required]),
      name : new FormControl('', [Validators.required, Validators.pattern(this.fioValidateString)]),
      lastname : new FormControl('', [Validators.required, Validators.pattern(this.fioValidateString)]),
      phone : new FormControl('', [Validators.required, Validators.pattern(this.phoneValidateString)]),
      country : new FormControl('', [Validators.required]),
      index : new FormControl('', [Validators.required]),
      address : new FormControl('', [Validators.required, Validators.pattern(this.addressValidateString)]),
      comment : new FormControl(''),
    },
    {validators: orderFormValidator}
  );

  get product(){ return this.orderForm.get('product')}
  get name(){ return this.orderForm.get('name')}
  get lastname(){ return this.orderForm.get('lastname')}
  get phone(){ return this.orderForm.get('phone')}
  get country(){ return this.orderForm.get('country')}
  get index(){ return this.orderForm.get('index')}
  get address(){ return this.orderForm.get('address')}
  get comment(){ return this.orderForm.get('comment')}

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { 

  }

  ngOnInit(): void {
    //console.log(this.activatedRoute.queryParams);
    this.subscription =  this.activatedRoute.queryParams.subscribe((params)=>{
      if (params['product']){
        this.orderForm.patchValue({product: params['product'] }) ;
      }
    })
  }

  sendOrder(){
    //console.log(this.product.value);
    let order: OrderType = {} as OrderType;
    //console.log (order);
    if (this.name?.value && this.lastname?.value && this.phone?.value && this.country?.value && this.index?.value && this.address?.value && this.product?.value){
      order.name = this.name?.value;
      order.last_name = this.lastname?.value;
      order.phone = this.phone?.value;
      order.country = this.country?.value;
      order.zip = this.index?.value;
      order.address = this.address?.value;
      order.product = this.product?.value;
      if (this.comment?.value){
        order.comment = this.comment?.value;
      }
      //console.log (order);
      this.isOrderCreating = true;
      this.subscriptionOrder = this.productService
      .createOrder(order)
      .subscribe((response) => {
        
        if (response.success && !response.message) {
          //alert('Спасибо за заказ');
          this.isOrderSuccess = true;
        } else {
          this.isOrderSuccess = false;
        }
      });
    }
    
    

  }
}
