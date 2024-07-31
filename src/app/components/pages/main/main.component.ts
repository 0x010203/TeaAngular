import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
//import * from 'bootstrap';
//declare var $: any;
import {Modal} from 'bootstrap';
import { Observable, Subscription } from 'rxjs';
//import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
   //standalone: true,
   //imports: [NgbAccordionModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit, OnDestroy {
  @ViewChild('modalTipElem')
  private modalTipElem!: ElementRef;

  private observable: Observable<bootstrap.Modal>;
  private subscription: Subscription | null = null;
  //private modal: bootstrap.Modal;


//   public testModal
  
   constructor() {
    //this.modal = new Modal()
    this.observable = new Observable((observer)=>{
      const timeout = setTimeout(()=>{
        const modal=new Modal(this.modalTipElem.nativeElement);
        observer.next(modal);
      }, 10000);
    })
    }

//   modalName: bootstrap.Modal | undefined;

// save(){
//     this.testModal?.toggle()
//   }
//   openModal(element){
//     this.testModal = new bootstrap.Modal(element,{} ) 
//     this.testModal?.show()
//   }

ngAfterViewInit(){
  //console.log(this.modalTipElem);
}

show(modalElement: HTMLElement){
  //const modal=new Modal(modalElement);
  const modal=new Modal(this.modalTipElem.nativeElement);
  modal.show();
}

  ngOnInit(): void {
    // $(".btn").addClass("hvr hvr-sweep-to-top");
    
    // let icons = {
    //   header: "iconClosed", // custom icon class
    //   activeHeader: "iconOpen", // custom icon class
    // };
  
    // $("#accordion").accordion({
    //   icons: icons,
    // });
    this.subscription = this.observable.subscribe((modal: bootstrap.Modal)=>{
      //console.log(modal);
      modal.show();
    });
  }

  // public showTip(): void{
  //   $(window).$('#modalTip').modal('show');
  // }

  ngOnDestroy(): void{
    this.subscription?.unsubscribe();
    console.log('Отписались');
  }
    
  

}
