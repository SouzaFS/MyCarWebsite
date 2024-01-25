import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  hidden_loginbtn : boolean = false;
  hidden_profilebtn : boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){ }

  ngOnInit(): void {
  }

  ChangeMainPageButton(){
    this.hidden_loginbtn = true;
    this.hidden_profilebtn = false;
    console.log(this.hidden_loginbtn);
    console.log(this.hidden_profilebtn);
  }
}
