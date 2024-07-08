import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'skills-assessment';
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
  changeLanguage() {
    const body = document.body
    if (this.browserLanguage === 'en') {
      body.classList.add('rtl');
      body.classList.remove('ltr');
      this.browserLanguage = 'ar'
      this.translate.use(this.browserLanguage as string);
      this.translate.use('ar')
      localStorage.setItem('browserLanguage', this.browserLanguage)

    } else {
      body.classList.add('ltr');
      body.classList.remove('rtl');
      this.browserLanguage = 'en'
      this.translate.use(this.browserLanguage as string);
      this.translate.use('en')
      localStorage.setItem('browserLanguage', this.browserLanguage)
    }
  }
}
