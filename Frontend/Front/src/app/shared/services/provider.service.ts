import { Injectable } from '@angular/core';
import {MainService} from "./main.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  constructor(http: HttpClient) {

    super(http);
  }
 /* getCategories()
  {
    return this.get('http://localhost/api/categories', body:{});

  }
  */
}
