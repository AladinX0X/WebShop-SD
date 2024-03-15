import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { OnDestroy } from  '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'AppleShop';
  constructor(private router: Router){}
  ngOnDestroy() {
    this.router.navigate([this.router.url]);
  }
}
