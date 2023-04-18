import {Component} from "@angular/core";
import {Cart} from "../model/cart.model";

@Component({
  selector:"cart-sumary",
  templateUrl:"cartSumary.component.html"
})

export class CartSumaryComponent{
  constructor(public cart:Cart) {}

}
