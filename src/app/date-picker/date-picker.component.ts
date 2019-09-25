import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  date: Date;
  date1: string;

  constructor() {
  }

  ngOnInit() {
    this.date = new Date();
    this.date1 = '';
  }


  onClick() {
    console.log(this.date1);
    console.log(this.date);
  }

}
