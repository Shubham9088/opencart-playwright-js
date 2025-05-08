import { locator } from "../Locators/locator";
import { logger } from "./logger";
import {expect} from "@playwright/test"

export class BaseHelper{

    constructor(page){
        this.page=page;
    }

     /**
     * Replaces placeholders in the XPath template with actual parameter values.
     * 
     * @param {string} template The XPath template containing placeholders in the format ${key}.
     * @param {object} params An object containing key-value pairs to replace in the template.
     * @returns {string} - The formatted XPath with values inserted.
     * @author shchak
     */
    getELementXpath(template, params){
        return template.replace(/\$\{(.*?)\}/g, (_, key) => params[key]);
    }


    /**
     * Enter text in the input field based on the locator and dynamic values
     * @param {string} locatorKey Key to fetch the locator template from locator object
     * @param {string} value Dynamic values (like text, class) to replace in locator template
     * @param {string} textToEnter Text value to be entered into the input field
     * @author shchak
     */
    async enterTextInInputField(locatorKey, value, textToEnter){
        const input = this.page.locator("xpath="+this.getELementXpath(locatorKey,value));
        try{
            await input.fill(textToEnter);
            logger.info("Text "+ textToEnter + "entered in input box");
        }catch(error){
            logger.error("Error in entering text "+textToEnter + "\nError"+error);
        }
    }

    /**
     * Select option from a dropdown based on the locator and dynamic values
     * @param {string} locatorKey Key to fetch the locator template from locator object
     * @param {string} value value Dynamic values (like text, class) to replace in locator template
     * @param {string} option dropdown option to select
     * @author shchak
     */
    async selectOptionFromDropDown(locatorKey, value, option){
        const dropdown = this.page.locator("xpath="+this.getELementXpath(locatorKey,value));
        const optionLoc= this.page.locator("xpath="+this.getELementXpath(locator.dropdownOption,option));
        try{
            await dropdown.waitFor({state:'visible'});
            await dropdown.click();
            logger.info("Dropdown clicked");
            try{
                await optionLoc.waitFor({state:'visible'});
                await optionLoc.click();
                logger.info("Option selected");
            }catch(error){
                logger.error("Error in selecting option "+option + "from dropdown" +"\nError"+error);
            }
        }catch(error){
            logger.error("Error in clicking dropdown" +"\Error"+error);
        }
    }

    /**
     * Select checkbox based on the locator and dynamic values
     * @param {string} locatorKey Key to fetch the locator template from locator object
     * @param {string} value value Dynamic values (like text, class) to replace in locator template
     * @author shchak
     */
    async selectCheckBox(locatorKey, value){
        const checkBox = this.page.locator("xpath="+this.getELementXpath(locatorKey,value));
        try{
            await checkBox.check();
            logger.info("Checkbox checked");
        }catch(error){
            logger.error("Error in checking checkbox"+"\nError"+error)
        }
    }

    /**
     * Click button based on the locator and dynamic values
     * @param {string} locatorKey Key to fetch the locator template from locator object
     * @param {string} value value Dynamic values (like text, class) to replace in locator template
     * @author shchak
     */
    async clickButton(locatorKey, value){
        const btnLoc = this.page.locator("xpath="+this.getELementXpath(locatorKey,value));
        try{
            await btnLoc.click();
            logger.info("Button clicked");
        }catch(error){
            logger.error("Error in clicking button"+"\nError"+error)
        }
    }

    /**
     * Verify text is visible or not based on the locator and dynamic values
     * @param {string} locatorKey Key to fetch the locator template from locator object
     * @param {string} value value Dynamic values (like text, class) to replace in locator template
     * @author shchak
     */
    async verifyText(locatorKey, value){
        const text= this.page.locator("xpath="+this.getELementXpath(locatorKey,value));
        await expect(text).toBeVisible();
    }
}