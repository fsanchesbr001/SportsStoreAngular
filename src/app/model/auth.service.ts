import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RestDatasource} from "./rest.datasource";

@Injectable()
export class AuthService{
  constructor(private datasource:RestDatasource) {}

  authenticate(user:string,password:string):Observable<boolean>{
    return this.datasource.authenticate(user,password);
  }

  get authenticated():boolean{
    return this.datasource.auth_token!=null;
  }

  clear(){
    this.datasource.auth_token = undefined;
  }
}
