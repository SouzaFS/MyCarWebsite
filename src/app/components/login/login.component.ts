import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MainPageComponent]
})
export class LoginComponent implements OnInit {

  type: string = "password";
  class: string = "fa fa-eye";
  loginForm!: FormGroup;
  routerLink!: string;
  userLocated : boolean = false;
  passwordMatch : boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private mainPage: MainPageComponent
  ) { }

  ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
  })
  }

  hideShowPass() {
    if (this.type == "password")
    {
      this.type = "text";
      this.class = "fa fa-eye-slash";
    }
    else
    {
      this.type = "password";
      this.class = "fa fa-eye";
    }
  }

  OnAuthenticate(){
    this.loginService.GetUsers()
    .subscribe(value => {
      
      value.data.forEach((currentUser:any) => {
        if (currentUser.username == this.loginForm.value.username){
          this.userLocated = true;
          if (currentUser.password == this.loginForm.value.password){
            this.passwordMatch = true;
          }
        }
      });
      if (this.passwordMatch && this.userLocated){
        this.mainPage.ChangeMainPageButton();
        this.router.navigate(['/']);
      }else{
        this.router.navigate(['/login']);
      }
    });
  }
}
