import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.component.html',
  styleUrls: ['./validate-code.component.scss']
})
export class ValidateCodeComponent {

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
