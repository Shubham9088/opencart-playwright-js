import {test} from '@playwright/test'
import OpenCartUtils from '../Utilites/OpenCartUtils';
import { TestData } from '../TestData/TestData';

test.describe("Registration test case",()=>{
    let openCartUtil;

    test.beforeEach(async({page})=>{
        openCartUtil=new OpenCartUtils(page);
        await page.goto("https://tutorialsninja.com/demo/");
    });

    /**
     * Validating error message for already registered email
     * @author shchak
     */
    test("Test error message for already registered email", async()=>{
        await openCartUtil.registerNewUser(TestData.userDetails.fname,TestData.userDetails.lname,TestData.userDetails.email,TestData.userDetails.mobile,TestData.userDetails.password,TestData.userDetails.conformPassword.actualPass);
        await openCartUtil.verifyErrorMessage(TestData.errorMessage.emailAlreadyExist);
    });

    /**
     * Validate error message for conform password input field
     * @author shchak
     */
    test("Test error message for incorrect confirm password",async()=>{
        await openCartUtil.registerNewUser(TestData.userDetails.fname,TestData.userDetails.lname,TestData.userDetails.email,TestData.userDetails.mobile,TestData.userDetails.password,TestData.userDetails.conformPassword.incorrectPass);
        await openCartUtil.verifyErrorMessage(TestData.errorMessage.confirmPasswordDoesNotMatch);
    });

});