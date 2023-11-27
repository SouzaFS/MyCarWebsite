import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private Url = 'https://localhost:44337/api/Users'
  constructor(private http : HttpClient) { }

  signUp(user:any){
    return this.http.post<any>(`${this.Url}`,user)
  }
}
