import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  openRegistrationPage() {
    console.log('will open registration page');
  }

  openLoginPage() {
    console.log('will open login page');
  }

}
