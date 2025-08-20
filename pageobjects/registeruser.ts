import {$} from '@wdio/globals'

// This class defines the page object for the registration user page
// It contains locators for various elements on the page
// and methods to interact with those elements.

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
    return $('//input[@data-qa="signup-name"]');
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

  public get radioButtonMale () {
    return $('//label[@for="id_gender1"]');
  }

  public get radioButtonFemale () {
    return $('//label[@for="id_gender2"]');
  }

  public get passwordInput () {
    return $('//input[@data-qa="password"]');
  }

  public get daySelect () {
    return $('//select[@data-qa="days"]');
  }

  public get monthSelect () {
    return $('//select[@data-qa="months"]');
  }

  public get yearSelect () {
    return $('//select[@data-qa="years"]');
  }

  public get newsletterCheckbox () {
    return $('//input[@id="newsletter"]');
  }

  public get offersCheckbox () {
    return $('//input[@id="optin"]');
  }

  public get firstNameInput () {
    return $('//input[@id="first_name"]');
  }

  public get lastNameInput () {
    return $('//input[@id="last_name"]');
  }

  public get companyInput () {
    return $('//input[@id="company"]');
  }

  public get addressInput () {
    return $('//input[@id="address1"]');
  }

  public get address2Input () {
    return $('//input[@id="address2"]');
  }

  public get countrySelect () {
    return $('//select[@id="country"]');
  }

  public get stateInput () {
    return $('//input[@id="state"]');
  }

  public get cityInput () {
    return $('//input[@id="city"]');
  }

  public get zipcodeInput () {
    return $('//input[@id="zipcode"]');
  }

  public get mobileNumberInput () {
    return $('//input[@id="mobile_number"]');
  }

  public get createAccountButton () {
    return $('//button[@data-qa="create-account"]');
  }

  public get accountCreatedMessage () {
    return $('//h2[@data-qa="account-created"]');
  }

  public get continueButton () {
    return $('//a[@data-qa="continue-button"]');
  }

  public get loggedInAsMessage () {
    return $('//a[text()=" Logged in as "]');
  }

  public get deleteAccountButton () {
    return $('//a[@href="/delete_account"]');
  }

  public get accountDeletedMessage () {
    return $('//h2[@data-qa="account-deleted"]');
  }
}

export default new RegisterUser();