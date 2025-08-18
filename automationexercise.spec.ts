import { expect } from "@wdio/globals";
import RegisterUser from "../pageobjects/registeruser.ts";

describe("Automation Exercise", () => {
  it("should open the homepage and verify the title", async () => {
    await browser.url("https://automationexercise.com");
    await browser.pause(3000);
    await expect(RegisterUser.sliderSection).toBeExisting();
    await browser.pause(3000);
    await RegisterUser.signUpMenu.click();
    await browser.pause(3000);
    await expect(RegisterUser.signUpTitle).toBeExisting();
    await expect(RegisterUser.signUpTitle).toHaveText("New User Signup!");
    await RegisterUser.nameInput.setValue("Adam Smith");
    await RegisterUser.emailInput.setValue("adamsmith@mail.com");
    await RegisterUser.signUpButton.click();
    await browser.pause(3000);
    await expect(RegisterUser.accountInfoTitle).toBeExisting();
    await expect(RegisterUser.accountInfoTitle).toHaveText(
      "ENTER ACCOUNT INFORMATION"
    );
  });
});