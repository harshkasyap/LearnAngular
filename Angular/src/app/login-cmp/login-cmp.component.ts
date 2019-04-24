import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.scss']
})
export class LoginCmpComponent implements OnInit {

  constructor() { }

  formdata;
  emailid;

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
   });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
  }

  onClickSubmit(data) {
    alert("Entered Email id : " + data.emailid);
  }

  onModelClickSubmit(data) {this.emailid = data.emailid;}

}
