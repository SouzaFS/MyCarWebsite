import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CreateEmailService } from 'src/app/services/create-email.service';
import { DbInteractService } from 'src/app/services/db-interact.service';

@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.component.html',
  styleUrls: ['./validate-code.component.scss']
})
export class ValidateCodeComponent implements OnInit {


  type: string = "password";
  class: string = "fa fa-eye";
  hiddenResendCodeButton! : boolean;
  hiddenTimerClock! : boolean;
  startMinutes: number = 1;
  startSeconds: number = 0;
  minutes: number = this.startMinutes;
  seconds: number = this.startSeconds;
  stringMinutes: string = "0" + this.minutes;
  stringSeconds: string = "0" + this.seconds;
  user: User = {UserName: "", UserEmail: ""}


  constructor(
    private dbInteractService: DbInteractService,
    private createEmailService: CreateEmailService,
  ) { }

  ngOnInit(): void{
    this.hiddenResendCodeButton = true;
    this.hiddenTimerClock = false;
    this.sendCode();
    if (this.hiddenTimerClock == false){
      setInterval(() => {
        this.updateTimerClock()
      },1000);
    }
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

  updateTimerClock(){
    if (this.seconds == 0){
      this.seconds = 60;
      this.minutes = this.minutes - 1;
      if (this.minutes < 0){
        this.minutes = this.startMinutes;
        this.seconds = this.startSeconds;
        this.hiddenTimerClock = true;
        this.hiddenResendCodeButton = false;
        return;
      }
    }
    if (!this.hiddenTimerClock)
      this.seconds--;

    if (this.minutes < 10){
      this.stringMinutes = "0" + this.minutes;
    }else{
      this.stringMinutes = this.minutes.toString();
    }
    
    if (this.seconds < 10){
      this.stringSeconds = "0" + this.seconds;
    }else{
      this.stringSeconds = this.seconds.toString();
    }
  }

  sendCode(){
    console.log(this.user)
    this.user.UserEmail = window.localStorage.getItem('ForgotPasswordEmail')!;
    this.dbInteractService.Get()
    .subscribe(a => {
      a.data.forEach((currentUser:any) => {
        if (currentUser.email == this.user.UserEmail){
          this.user.UserName = currentUser.name;

          this.createEmailService.SendEmail("CodeValidation","office365", this.user)
          .subscribe(a => console.log(a.data));

          this.hiddenTimerClock = false;
          this.hiddenResendCodeButton = true;
        }
      });
    });
  }
}
