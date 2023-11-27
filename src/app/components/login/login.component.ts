import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  class: string = "fa fa-eye";
  constructor() { }

  ngOnInit(): void {
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
}
