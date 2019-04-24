import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.scss']
})
export class NewCmpComponent implements OnInit {

  newcomponent = "Entered in new component created";

  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  isavailable = true;   //variable is set to false

  todaydate; //= new Date();
  httpdata;

  myClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    //alert("Button is clicked");
    this.isavailable = false;
    console.log(event);
  }

  changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }

  constructor(private myservice: MyserviceService, private http: HttpClient) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((res: Response) => {
        console.log(res);
        this.httpdata = res;
    })
  }

}
