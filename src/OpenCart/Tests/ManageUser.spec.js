import {test} from "../Utilites/Fixture";
import { TestData } from '../TestData/TestData';

test.describe("Manage user",()=>{

    test("Edit mobile no of a user",async({openCartUtils})=>{
        await openCartUtils.loginUser(TestData.loginData.validData.user1.username,TestData.loginData.validData.user1.password);
        await openCartUtils.verifyMessage(TestData.text.editAccount);
        await openCartUtils.clickByText(TestData.text.editAccount);
        await openCartUtils.verifyMessage(TestData.text.personalDetails);
        await openCartUtils.enterTextByPlaceholder(TestData.placeHolder.telephone,"8459249688");
        await openCartUtils.clickButtonByTypeAndValue(TestData.type.submit,TestData.text.continueBtn);
        await openCartUtils.verifyMessage(TestData.message.updateAccount);
    });
});