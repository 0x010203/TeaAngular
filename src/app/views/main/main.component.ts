import { Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import * from 'bootstrap';
//declare var $: any;
//import {Modal} from 'bootstrap';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
//import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit, OnDestroy {
  //@ViewChild('modalTipElem')
  //private modalTipElem!: ElementRef;

  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;

  private observable: Observable<NgbModal> ;
  private subscription: Subscription | null = null;
  //private modal: bootstrap.Modal;

 
   constructor(private modalService: NgbModal) {
    
    this.observable = new Observable((observer)=>{
      const timeout = setTimeout(()=>{
         // const modal=new Modal(this.modalTipElem.nativeElement);
         observer.next(this.modalService);
      }, 10000);
    })
    }

//   modalName: bootstrap.Modal | undefined;


ngAfterViewInit(){
  
    
  // this.observable = new Observable((observer)=>{
  //   const timeout = setTimeout(()=>{
  //     this.modalService.open(this.popup,{});
      
  //      observer.next(this.modalService);
  //   }, 10000);
  // })
  
   this.subscription = this.observable.subscribe((modal: NgbModal)=>{

       modal.open(this.popup,{});
     });
  
}


  ngOnInit(): void {
    // this.subscription = this.observable.subscribe((modal: bootstrap.Modal)=>{

    //   //modal.show();
    // });
  }


  ngOnDestroy(): void{
    this.subscription?.unsubscribe();
    if (!environment.production){
      console.log('Отписались');
    }
    
  }
    
  

}
