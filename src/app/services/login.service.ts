import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Url = 'https://localhost:44337/api/Users/username?username='
  constructor(
    private http : HttpClient
    ) { }

  Authenticate(login:any){
    var username = login.username;
    var password = login.password;

    this.http.get<any>(`${this.Url}`+username).subscribe(value => {
      var ObjPassword = value.data.password
      if (ObjPassword == password) {
        return console.log("Right Password")
      }
      else{
        return console.log("Wrong Password")
      }
    })
  }
}
