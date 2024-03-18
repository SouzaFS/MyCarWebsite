import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbInteractService } from 'src/app/services/db-interact.service';

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
  signUpForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder, 
    private dbInteractService: DbInteractService
    ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
    })
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

  OnSignUp(){
    if(this.confirmPassword == this.password){
      this.dbInteractService.Create(this.signUpForm.value)
      .subscribe({
        next:(res)=>{
          alert("User Registered")
        },
        error:(err)=>{
          alert("Error")
        }
      })
    }else{
        alert("passwords don't match")
    }

  }
}
