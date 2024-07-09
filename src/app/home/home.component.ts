import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  browserLanguage: string;


  constructor(

    public translate: TranslateService
  ) {
    const hasLang = localStorage.getItem('browserLanguage') == null;
    if (hasLang) {
      translate.addLangs(['en', 'ar']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang && browserLang.match(/en|ar/) ? browserLang : 'en');
      this.browserLanguage = browserLang ?? 'en';
      localStorage.setItem('browserLanguage', this.browserLanguage);
    }

    else {
      this.browserLanguage = localStorage.getItem('browserLanguage') ?? 'en';
      translate.use(this.browserLanguage)
    }

  }
}
