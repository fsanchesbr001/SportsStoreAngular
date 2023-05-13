import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl:"productEditor.component.html"
})
export class ProductEditorComponent{
  editing:boolean=false;
  product:Product = new Product();

  constructor(private repository:ProductRepository,
              private router:Router,
              private activeRoute:ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"]=="edit";
    if(this.editing){
      Object.assign(this.product, repository.getProduct(
        activeRoute.snapshot.params["id"]));
    }
  }

  save(){
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
