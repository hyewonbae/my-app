import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
 
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit ran..")
    this.name="Hye won"
  }
  onClick() {
    this.name="New Name";
  }
  
}
