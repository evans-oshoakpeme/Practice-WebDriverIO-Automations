import { expect } from "@wdio/globals";
import RegisterUser from "../pageobjects/registeruser.ts"; // Importing the RegisterUser page object

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
  });
});