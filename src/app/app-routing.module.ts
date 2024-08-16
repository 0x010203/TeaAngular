import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { OrderComponent } from './views/order/order.component';

const routes: Routes = [
//  {path: '', component: MainComponent},
  // {path: 'products', component: ProductsComponent},
  // {path: 'products/:id', component: ProductComponent},
//  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
