import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private MyClient:HttpClient) {
  }
  baseUrl = "https://jsonplaceholder.typicode.com/users";

  GetAllUsers(){
    return this.MyClient.get(this.baseUrl);
  }

  GetUserByID(id:number){
    return this.MyClient.get(`${this.baseUrl}/${id}`)
  }


}
