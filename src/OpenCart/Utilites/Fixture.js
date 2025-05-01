import {test as base} from "@playwright/test"
import OpenCartUtils from "./OpenCartUtils"


const test=base.extend({
    openCartUtils: async({page}, use)=>{
        //creating a OpenCartUtils instance
        const utils=new OpenCartUtils(page);
        await page.goto("/demo");
        //gives the utils object to test
        await use(utils);
    }
});

module.exports={
    test,
    expect:base.expect
};