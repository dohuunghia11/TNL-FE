import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-for-host',
  templateUrl: './home-for-host.component.html',
  styleUrls: ['./home-for-host.component.css']
})
export class HomeForHostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createApartment() {
    this.router.navigate(['/api/create-apartment']);
  }
}
