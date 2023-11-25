import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  password: string = "password";
  confirmPassword: string = "password";
  eyePassword: string = "fa fa-eye";
  eyeConfirmPassword: string = "fa fa-eye"
  constructor() { }

  ngOnInit(): void {
  }

  hideShowPass() {
    if (this.password == "password")
    {
      this.password = "text";
      this.eyePassword = "fa fa-eye-slash";
    }
    else
    {
      this.password = "password";
      this.eyePassword = "fa fa-eye";
    }
  }

  hideShowConfPass(){
    if (this.confirmPassword == "password")
    {
      this.confirmPassword = "text";
      this.eyeConfirmPassword = "fa fa-eye-slash";
    }
    else
    {
      this.confirmPassword = "password";
      this.eyeConfirmPassword = "fa fa-eye";
    }
  }
}
