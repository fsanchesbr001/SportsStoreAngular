import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AuthComponent} from "./auth.component";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./auth.guard";
import {MaterialFeatures} from "./material.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {ProductEditorComponent} from "./productEditor.component";
import {ProductTableComponent} from "./productTable.component";
import {OrderTableComponent} from "./orderTable.component";

let routing = RouterModule.forChild([
  {path:"auth",component:AuthComponent},
  //{path:"main",component:AdminComponent},
 // {path:"main",component:AdminComponent,canActivate:[AuthGuard]},
  {
    path:"main",component:AdminComponent,canActivate:[AuthGuard],
    children:[
      {path:"products/:mode/:id",component:ProductEditorComponent},
      {path:"products/:mode",component:ProductEditorComponent},
      {path:"products",component:ProductTableComponent},
      {path:"orders",component:OrderTableComponent},
      {path:"**",redirectTo:"products"}
    ]
  },
  {path:"**",redirectTo:"auth"}
]);
@NgModule({
  imports: [CommonModule, FormsModule, routing, MaterialFeatures, MatToolbarModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatDividerModule],
  declarations:[AuthComponent,AdminComponent,ProductEditorComponent,
    ProductTableComponent,OrderTableComponent],
  providers:[AuthGuard]
})
export class AdminModule{}
