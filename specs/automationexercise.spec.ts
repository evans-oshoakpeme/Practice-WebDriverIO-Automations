import { expect } from "@wdio/globals";
import RegisterUser from "../pageobjects/registeruser.ts"; // Importing the RegisterUser page object
import registeruser from "../pageobjects/registeruser.ts";

// This file contains the test cases for the Automation Exercise website

describe("Automation Exercise", () => {
  it("should open the homepage and verify the title", async () => {
    await browser.url("https://automationexercise.com"); // Navigate to the homepage
    await browser.pause(3000);
    await expect(RegisterUser.sliderSection).toBeExisting(); // Verify the slider section exists
    await browser.pause(3000);
    await RegisterUser.signUpMenu.click(); // Click on the sign-up menu
    await browser.pause(3000);
    await expect(RegisterUser.signUpTitle).toBeExisting(); // Verify the sign-up title exists
    await expect(RegisterUser.signUpTitle).toHaveText("New User Signup!"); // Verify the text of the sign-up title
    await RegisterUser.nameInput.setValue("Adam Smith"); // Input the name
    await RegisterUser.emailInput.setValue("adamsmith@mail.com"); // Input the email
    await RegisterUser.signUpButton.click();
    await browser.pause(3000);
    await expect(RegisterUser.accountInfoTitle).toBeExisting(); // Verify the account info title exists
    // Verify the text of the account info title
    await expect(RegisterUser.accountInfoTitle).toHaveText(
      "ENTER ACCOUNT INFORMATION"
    );
    await RegisterUser.radioButtonMale.click(); // Select the Male radio button
    await RegisterUser.passwordInput.setValue("password123"); // Input the password
    await RegisterUser.daySelect.selectByVisibleText("1"); // Select the day
    await RegisterUser.monthSelect.selectByVisibleText("January"); // Select the month
    await RegisterUser.yearSelect.selectByVisibleText("1990"); // Select the year
    await RegisterUser.newsletterCheckbox.click(); // Click the newsletter checkbox
    await RegisterUser.offersCheckbox.click(); // Click the special offers checkbox
    await RegisterUser.firstNameInput.setValue("Adam"); // Input the first name
    await RegisterUser.lastNameInput.setValue("Smith"); // Input the last name
    await RegisterUser.companyInput.setValue("Tech Solutions"); // Input the company name
    await RegisterUser.addressInput.setValue("123 Tech Street"); // Input the address
    await RegisterUser.address2Input.setValue("Suite 456"); // Input the address line 2
    await RegisterUser.countrySelect.selectByVisibleText("United States"); // Select the country
    await RegisterUser.stateInput.setValue("California"); // Input the state
    await RegisterUser.cityInput.setValue("Los Angeles"); // Input the city
    await RegisterUser.zipcodeInput.setValue("90001"); // Input the zipcode
    await RegisterUser.mobileNumberInput.setValue("1234567890"); // Input the mobile number
    await RegisterUser.createAccountButton.click(); // Click the create account button
    await browser.pause(3000);
    await expect(RegisterUser.accountCreatedMessage).toBeExisting(); // Verify the account created message exists
    await expect(RegisterUser.accountCreatedMessage).toHaveText(
      "ACCOUNT CREATED!"
    ); // Verify the text of the account created message 
    await RegisterUser.continueButton.click(); // Click the continue button
    await browser.pause(3000);
    await expect(RegisterUser.loggedInAsMessage).toBeExisting(); // Verify the logged in message exists
    await expect(RegisterUser.loggedInAsMessage).toHaveText(
      "Logged in as Adam Smith"
    ); // Verify the text of the logged in message 
    await browser.pause(3000);
    await registeruser.deleteAccountButton.click(); // Click the delete account button
    await browser.pause(3000);
    await expect(RegisterUser.accountDeletedMessage).toBeExisting(); // Verify the account deleted message exists
    await expect(RegisterUser.accountDeletedMessage).toHaveText(
      "ACCOUNT DELETED!"
    ); // Verify the text of the account deleted message
    await RegisterUser.continueButton.click(); // Click the continue after delete button
    await browser.pause(3000);
    await expect(RegisterUser.sliderSection).toBeExisting(); // Verify the slider section exists after deletion
  });
});