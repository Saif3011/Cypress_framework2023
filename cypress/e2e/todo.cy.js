import { faker } from '@faker-js/faker';
import UserApi from '../API/userApi';
import TodoApi from '../API/todoApi';
import TodoPage from '../PAGES/TodoPage';
import NewTodoPage from '../PAGES/newTodopage';
/// <reference types="cypress" />
describe('todo test cases ' , ()=>{
    let token;
beforeEach(()=>{
    // global variable token shared with other API
    UserApi
    .register()
    .then(response=>{
        // WE SET VALUE TO TOKEN FROM BEFORE EACH
        token =response.body.access_token
    })

})


    it('should be able to add a todo ', ()=>{
        new TodoPage()
        .load()
        .clickonAddBtn()
        .addNewTodo('learn Cypress')
        .firstItemShouldHaveText('learn Cypress')    
        })



        it('should be able to mark a todo as completed ',()=>{
                TodoApi.addNewTodoMark(token)

            new TodoPage()
            .load()
            .markFirstTodoAsCompleted()
            .firstItemShouldHaveBackgroundColor("rgb(33, 76, 97)")

                // cy.visit('/');
                // cy.get('[data-testid="complete-task"]')
                // .eq(0)
                // .click();
                // cy.get('[data-testid="todo-item"]')
                // .should('have.css','background-color','rgb(33, 76, 97)')
            })
            
        }) 

