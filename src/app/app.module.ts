import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {StoreModule} from "./store/store.module";
import {StoreComponent} from "./store/store.component";
import {CartDetailComponent} from "./store/cart.Detail.component";
import {CheckoutComponent} from "./store/checkout.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {path:"store", component:StoreComponent},
      {path:"checkout",component:CheckoutComponent},
      {path:"cart",component:CartDetailComponent},
      {path:"**",redirectTo:"/store"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
