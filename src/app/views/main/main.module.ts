import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

//import * as bootstrap from "bootstrap";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MainRoutingModule,
    NgbAccordionModule,
    //NgbModalModule
  ],
  exports: [
    MainRoutingModule
  ]
})
export class MainModule { }
