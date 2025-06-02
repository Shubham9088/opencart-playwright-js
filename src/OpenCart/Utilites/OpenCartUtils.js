import { locator } from "../Locators/locator";
import { TestData } from "../TestData/TestData";
import { BaseHelper } from "./BaseHelper";
import { logger } from "./logger";
export default class OpenCartUtils extends BaseHelper{

    constructor(page){
        super(page);
    }

    /**
     * Launch registration page
     * @author shchak
     */
    async launchRegistrationPage(){
        await this.selectOptionFromDropDown(locator.objByClassAndText,{class:TestData.class.dropdown, text:TestData.dropdown.myAccount},{class:TestData.class.dropdownMenu,text:TestData.text.register});
    }

    /**
     * Launch to registration page and register new user
     * @param {string} fname first name of user
     * @param {string} lname last name of user
     * @param {string} email email of user
     * @param {string} telephone mobile no of user
     * @param {string} password password of user
     * @param {string} conformPassword conform password of user
     * @author shchak
     */
    async registerNewUser(fname,lname,email,telephone,password,conformPassword){
        await this.launchRegistrationPage();
        await this.enterTextInInputField(locator.objByPlaceholder,{text:TestData.placeHolder.fname},fname);
        await this.enterTextInInputField(locator.objByPlaceholder,{text:TestData.placeHolder.lname},lname);
        await this.enterTextInInputField(locator.objByPlaceholder,{text: TestData.placeHolder.email},email);
        await this.enterTextInInputField(locator.objByPlaceholder,{text: TestData.placeHolder.telephone},telephone);
        await this.enterTextInInputField(locator.objByPlaceholder,{text: TestData.placeHolder.password},password);
        await this.enterTextInInputField(locator.objByPlaceholder,{text: TestData.placeHolder.conformPassword},conformPassword);
        await this.selectCheckBox(locator.objByTextAndType,{text:TestData.checkbox.registrationCheckBox,type:TestData.type.checkbox});
        await this.clickButton(locator.objByTypeAndValue,{type: TestData.type.submit,value:TestData.text.continueBtn});
        
    }

    /**
     * Verify error message
     * @param {string} message error message
     * @author shchak
     */
    async verifyMessage(message){
        await this.verifyText(locator.objByText,{text:message});
    }

    /**
     * Login to open cart application
     * @param {string} username username to login to open cart application 
     * @param {*} password password to login to open cart application
     * @author shchak
     */
    async loginUser(username, password){
        //launch login page
        await this.selectOptionFromDropDown(locator.objByClassAndText,{class:TestData.class.dropdown, text:TestData.dropdown.myAccount},{class:TestData.class.dropdownMenu,text:TestData.text.login});
        //enter username
        await this.enterTextInInputField(locator.objByPlaceholder,{text:TestData.placeHolder.username}, username);
        //enter password
        await this.enterTextInInputField(locator.objByPlaceholder,{text:TestData.placeHolder.password}, password);
        //clicking on login button
        await this.clickButton(locator.objByTypeAndValue,{type:TestData.type.submit, value:TestData.text.login});
    }

    /**
     * click on text
     * @param {string} text text to click
     * @author shchak
     */
    async clickByText(text){
        await this.clickButton(locator.objByText,{text:text});
    }

    /**
     * Enter text in input field 
     * @param {string} placeholder placeholder of input field
     * @param {string} text text to enter in input field
     * @author shchak
     */
    async enterTextByPlaceholder(placeholder,text){
        await this.enterTextInInputField(locator.objByPlaceholder,{text:placeholder},text);
    }

    /**
     * click a button
     * @param {string} type type of a button
     * @param {string} value value of a button
     * @author shchak
     */
    async clickButtonByTypeAndValue(type,value){
        await this.clickButton(locator.objByTypeAndValue,{type:type, value:value})
    }

}