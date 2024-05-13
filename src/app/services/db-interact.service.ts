import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbInteractService {

  private Url = 'https://localhost:44337/api/Users'
  private UrlId = 'https://localhost:44337/api/Users/id?id='
  private EmailUrl = 'https://localhost:44337/api/Email'

  constructor(
    private http : HttpClient
  ) { }

  Get(){
    return this.http.get<any>(`${this.Url}`);
  }

  GetById(id: number){
    return this.http.get<any>(`${this.UrlId}`+id.toString())
  }

  Create(object: any){
    return this.http.post<any>(`${this.Url}`,object);
  }

  Remove(id: number){
    return this.http.delete<any>(`${this.UrlId}`+id.toString());
  }

  Update(id: number, object: any){
    return this.http.put<any>(`${this.UrlId}`+id.toString(), object);
  }

  SendEmail(emailType: string, emailCredentials: string, object: any){
    return this.http.post<any>(`${this.EmailUrl}`+'?emailType='+emailType.toString()+'&emailCredentials='+emailCredentials.toString(),object);
  }
  
}
