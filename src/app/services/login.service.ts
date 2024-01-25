import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Url = 'https://localhost:44337/api/Users'
  returnContent! : string;

  constructor(
    private http : HttpClient
    ) { }

  GetUsers(){
    return this.http.get<any>(`${this.Url}`)
    /*.subscribe(value => {
      
      value.data.forEach((currentUser:any) => {
        if (currentUser.username == login.username){
          this.userLocated = true;
          if (currentUser.password == login.password){
            this.passwordMatch = true;
          }
        }
      });
      if (this.passwordMatch && this.userLocated){
        this.returnContent = "/";
      }else{
        this.returnContent = "/login";
      }
    });*/
    //return this.returnContent;
  }
} 
