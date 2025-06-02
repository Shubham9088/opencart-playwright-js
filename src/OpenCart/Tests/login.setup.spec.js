import { TestData } from '../TestData/TestData';
import {test} from '../Utilites/Fixture';

test('Login and save storage state',async({page, openCartUtils})=>{
    console.log("user name",TestData.loginData.validData.user1.username);
    console.log("password",TestData.loginData.validData.user1.password);
    await openCartUtils.loginUser(TestData.loginData.validData.user1.username,TestData.loginData.validData.user1.password);
    await openCartUtils.verifyMessage(TestData.text.editAccount);
    await page.waitForURL("https://tutorialsninja.com/demo/index.php?route=account/account");
    //save the session data into storageState.json
    await page.context().storageState({ path: 'storageState.json' });
});