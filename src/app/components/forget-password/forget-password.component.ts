import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  type: string = "password";
  class: string = "fa fa-eye";
  forgotForm! : FormGroup;
  constructor(
    private formBuilder: FormBuilder
    
  ) {}

  ngOnInit(): void {
  this.forgotForm = this.formBuilder.group({
  email: ['', Validators.required]
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

  saveEmailOnStorage(){
    window.localStorage.setItem('ForgotPasswordEmail', this.forgotForm.value.email);
  }
}
