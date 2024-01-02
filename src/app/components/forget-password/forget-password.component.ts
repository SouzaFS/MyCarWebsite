import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {

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
