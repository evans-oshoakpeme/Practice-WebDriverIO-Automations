import {$} from '@wdio/globals'

class RegisterUser {
  public get sliderSection () {
     return $('//section[@id="slider"]');
    };

  public get signUpMenu () {
    return $('//a[@href="/login"]');
  }

  public get signUpTitle () {
    return $('//h2[text()="New User Signup!"]');
  }

  public get nameInput () {
    return $('//input[@placeholder="Name"]');
  }

  public get emailInput () {
    return $('//input[@data-qa="signup-email"]');
  }

  public get signUpButton () {
    return $('//button[@data-qa="signup-button"]');
  }

  public get accountInfoTitle () {
    return $('//b[text()="Enter Account Information"]');
  }
}

export default new RegisterUser();