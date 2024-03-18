import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CreateEmailService {

  private Url = 'https://localhost:44316/api/Email'

  constructor(
    private http : HttpClient
  ) { }

  SendEmail(emailType: string, emailCredentials: string, user: User){
    return this.http.post<any>(`${this.Url}`+'?emailType='+emailType.toString()+'&emailCredentials='+emailCredentials.toString(),user);
  }
}
