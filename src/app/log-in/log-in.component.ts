import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInModel } from '../models/log-in-model';
import { trigger, animate, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup = new FormGroup({});
  isError: boolean = false;
  logInCredintials: LogInModel = {
    username: '',
    password: '',
    rememberMe: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)],],
      rememberMe: []
    });

  }
  onSubmit() {
    console.log(this.logInForm.value);
    if (this.logInForm.invalid) {
      this.isError = true;
      // [ngClass]="{'rounded-input-error': ((logInForm.get('password')?.invalid && logInForm.get('password')?.touched) || (logInForm.get('password')?.value.length <3 && logInForm.get('password')?.touched && logInForm.get('password')?.value.length !=0)  )}"
      // *ngIf="(logInForm.get('username')?.invalid && logInForm.get('username')?.touched) || logInForm.get('password')?.invalid && logInForm.get('password')?.touched"
      return;
    }

    if (this.logInForm.valid) {
      this.isError = false;
      console.log("Form Submitted!");
      let logInModel: LogInModel = {
        username: this.logInForm.value.username,
        password: this.logInForm.value.password,
        rememberMe: this.logInForm.value.rememberMe
      }
      this.router.navigate(['/home']);
    }
    else {
      console.log("Form Not Submitted!");
    }
  }
}
