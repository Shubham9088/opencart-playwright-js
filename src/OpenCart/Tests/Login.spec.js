import {test} from '@playwright/test'
import OpenCartUtils from '../Utilites/OpenCartUtils';
import { TestData } from '../TestData/TestData';

test.describe("Login Test",()=>{
    let openCartUtil;

    test.beforeEach(async({page})=>{
        openCartUtil=new OpenCartUtils(page);
        await page.goto("/demo");
    });

    /**
     * Verify error message when login with in
     */
    var i=1;
    for(let data of Object.values(TestData.loginData.invalidData)){
        test("Login with invalid details"+i,async()=>{
            await openCartUtil.loginUser(data.username,data.password);
            await openCartUtil.verifyMessage(TestData.errorMessage.invalidloginDetails);
        });
        i=i+1;
    }

    test("Login with valid details",async()=>{
        await openCartUtil.loginUser(TestData.loginData.validData.user1.username,TestData.loginData.validData.user1.password);
        await openCartUtil.verifyMessage("Edit your account information");
    });
});