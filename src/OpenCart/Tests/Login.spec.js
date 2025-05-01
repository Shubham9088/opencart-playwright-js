import {test,expect} from '../Utilites/Fixture';
import { TestData } from '../TestData/TestData';

test.describe("Login Test",()=>{
    
    /**
     * Verify error message when login with invalid data
     * @author shchak
     */
    var i=1;
    for(let data of Object.values(TestData.loginData.invalidData)){
        test("Login with invalid details"+i,async({openCartUtils})=>{
            await openCartUtils.loginUser(data.username,data.password);
            await openCartUtils.verifyMessage(TestData.errorMessage.invalidloginDetails);
        });
        i=i+1;
    }

    /**
     * Verify user is logged in and home page is displayed
     * @author shchak
     */
    test("Login with valid details",async({openCartUtils})=>{
        await openCartUtils.loginUser(TestData.loginData.validData.user1.username,TestData.loginData.validData.user1.password);
        await openCartUtils.verifyMessage(TestData.text.editAccount);
    });
});