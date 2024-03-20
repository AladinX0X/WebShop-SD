import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'AppleShop';
  
  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  
  ngOnDestroy() {
    this.router.navigate([this.router.url]);
  }
}
