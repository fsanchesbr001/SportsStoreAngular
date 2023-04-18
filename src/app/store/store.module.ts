import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import {CounterDirective} from "./counter.directive";
import {CartSumaryComponent} from "./cartSumary.component";
import {CheckoutComponent} from "./checkout.component";
import {CartDetailComponent} from "./cart.Detail.component";


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSumaryComponent,
    CheckoutComponent,
    CartDetailComponent
  ],
  exports: [
    StoreComponent,
    CheckoutComponent,
    CartDetailComponent]
})
export class StoreModule { }
