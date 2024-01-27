import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbInteractService } from 'src/app/services/db-interact.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  hidden_loginbtn! : boolean;
  hidden_profilebtn! : boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dbInteract: DbInteractService
  ){ }

  ngOnInit(): void {
    if (window.localStorage.getItem('currentUserID') != null){
      this.hidden_loginbtn = true;
      this.hidden_profilebtn = false;
    }else{
      this.hidden_loginbtn = false;
      this.hidden_profilebtn = true;
    }
  }

  OnRemoveCurrentUser(){
    window.localStorage.removeItem('currentUserID');
  }
}
