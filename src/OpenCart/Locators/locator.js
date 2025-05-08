export const locator={
    objByText:"//*[contains(text(),'${text}')]",
    objByClassAndText:"//*[contains(@class,'${class}')]//*[contains(text(),'${text}')]",
    objByPlaceholder:"//*[@placeholder='${text}']",
    objByTypeAndValue:"//*[@type='${type}' and @value='${value}']",
    objByName:"//*[@name='${text}']",
    objByTextAndType:"//*[contains(text(),'${text}')]/*[@type='${type}']",
    objByTitle:"//*[@title='${title}']",
    dropdownOption:"//*[contains(@class,'${class}')]//*[contains(text(),'${text}')]"
}