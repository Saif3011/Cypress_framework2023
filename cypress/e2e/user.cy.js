/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import Loginpage from "../PAGES/LoginPage";
import TodoPage from '../PAGES/TodoPage';


it('should be able to login ', ()=>{
    //const loginpage = new Loginpage();
//or directly with new Loginpage without constructor :
    new Loginpage()
    .load()
    .Login("daka23775@gmail.com","23775449")
    .welcomeMessageShouldBeVisible
})

