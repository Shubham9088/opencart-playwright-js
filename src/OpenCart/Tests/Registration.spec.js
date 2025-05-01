import {test, expect} from "../Utilites/Fixture";
import { TestData } from '../TestData/TestData';

test.describe("Registration test case",()=>{
    
    /**
     * Validating error message for already registered email
     * @author shchak
     */
    test("Test error message for already registered email", async({openCartUtils})=>{
        await openCartUtils.registerNewUser(TestData.userDetails.fname,TestData.userDetails.lname,TestData.userDetails.email,TestData.userDetails.mobile,TestData.userDetails.password,TestData.userDetails.conformPassword.actualPass);
        await openCartUtils.verifyMessage(TestData.errorMessage.emailAlreadyExist);
    });

    /**
     * Validate error message for conform password input field
     * @author shchak
     */
    test("Test error message for incorrect confirm password",async({openCartUtils})=>{
        await openCartUtils.registerNewUser(TestData.userDetails.fname,TestData.userDetails.lname,TestData.userDetails.email,TestData.userDetails.mobile,TestData.userDetails.password,TestData.userDetails.conformPassword.incorrectPass);
        await openCartUtils.verifyMessage(TestData.errorMessage.confirmPasswordDoesNotMatch);
    });

});