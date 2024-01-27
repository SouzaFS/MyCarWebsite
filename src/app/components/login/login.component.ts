import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbInteractService } from 'src/app/services/db-interact.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    private dbInteractService: DbInteractService,
    private router: Router
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
    this.dbInteractService.Get()
    .subscribe(a => {
      a.data.forEach((currentUser:any) => {
        if (currentUser.username == this.loginForm.value.username){
          this.userLocated = true;
          if (currentUser.password == this.loginForm.value.password){
            this.passwordMatch = true;
            window.localStorage.setItem('currentUserID', currentUser.id);
            //window.localStorage.setItem('Initial', currentUser.username.charAt(0));
          }
        }
        if (this.passwordMatch && this.userLocated){
          this.router.navigate(['/']);
        }else{
          this.router.navigate(['/login']);
        }
      });
    });
  }
}
