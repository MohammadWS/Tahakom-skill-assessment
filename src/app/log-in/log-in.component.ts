import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInModel } from '../models/log-in-model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {

  logInForm: FormGroup = new FormGroup({});
  usernameError: boolean = false;
  passWordError: boolean = false;
  browserLanguage: String;
  
  logInCredintials: LogInModel = {
    username: '',
    password: '',
    rememberMe: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public translate: TranslateService,
    

  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|ar/) ? browserLang : 'en');
    this.browserLanguage = browserLang ?? 'en';
  }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      password: ['', [Validators.required, Validators.minLength(8)],],
      rememberMe: false
    });

  }
  onSubmit() {
    if (this.logInForm.invalid) {
      this.usernameError = this.logInForm.controls['username'].errors ? true : false;
      this.passWordError = this.logInForm.controls['password'].errors ? true : false;
      return;
    }
    if (this.logInForm.valid) {
      this.usernameError = false;
      this.passWordError = false;
      let logInModel: LogInModel = {
        username: this.logInForm.value.username,
        password: this.logInForm.value.password,
        rememberMe: this.logInForm.value.rememberMe
      }
      this.router.navigate(['/home']);
    }
    else {  }
  }


  
}
