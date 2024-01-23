import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  class: string = "fa fa-eye";
  loginForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
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
    this.loginService.Authenticate(this.loginForm.value)

    console.log(this.loginForm.value.username)
  }
}
