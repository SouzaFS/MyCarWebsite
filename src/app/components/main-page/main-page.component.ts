import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  hidden_loginbtn! : boolean;
  hidden_profilebtn! : boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){ }

  ngOnInit(): void {
    if (window.localStorage.getItem('currentUser') != null){
      this.hidden_loginbtn = true;
      this.hidden_profilebtn = false;
    }else{
      this.hidden_loginbtn = false;
      this.hidden_profilebtn = true;
    }
  }

  removeCurrentUser(){
    window.localStorage.removeItem('currentUser');
  }
}
