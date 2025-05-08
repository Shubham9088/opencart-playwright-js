export const TestData={
    loginData:{
        invalidData:{
            user1:{userame:"Test",username:"Test"},
            user2:{username:"", password:"Test@123"},
            user3:{username:"Test@gmail.com",password:""},
            user4:{username:"", password:""}
        },
        validData:{
            user1:{username:"shubhamchakole22@gmail.com",password:"Shubham@123"}
        }
    },
    userDetails:{
        fname:"shubham",
        lname:"chakole",
        email:"shubhamchakole22@gmal.com",
        mobile:"8055899488",
        password:"Shubham@123",
        conformPassword:{
            incorrectPass:"Shubham@",
            actualPass:"Shubham@123"
        }
    },
    errorMessage:{
        emailAlreadyExist:"E-Mail Address is already registered!",
        confirmPasswordDoesNotMatch:"Password confirmation does not match password!",
        invalidloginDetails:"No match for E-Mail Address and/or Password."
    },
    class:{
        dropdown:"dropdown",
        dropdownMenu:"dropdown-menu"
    },
    dropdown:{
        myAccount: "My Account" 
    },

    text:{
        login: "Login",
        register: "Register",
        continueBtn:"Continue",
        editAccount:"Edit your account information",
        myAccount:"My Account Information",
        personalDetails:"Your Personal Details"
    },
    placeHolder:{
        fname:"First Name",
        lname:"Last Name",
        email:"E-Mail",
        telephone:"Telephone",
        password:"Password",
        conformPassword:"Password Confirm",
        username:"E-Mail Address",
    },
    checkbox:{
        registrationCheckBox:"I have read and agree to the"
    },
    type:{
        checkbox:"checkbox",
        submit:"submit"
    },
    message:{
        updateAccount:"Success: Your account has been successfully updated."
    }
}