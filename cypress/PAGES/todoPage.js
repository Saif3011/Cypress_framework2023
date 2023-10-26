import NewTodoPage from "./newTodopage";

class TodoPage {

//elements

  get welcomeMessage(){

    return  cy.get('[data-testid="welcome"]');
 }



  get  addBtn(){

   return cy.get('[data-testid="add"]')
}
 get firstnewTodoItem(){

   return cy.get('[data-testid="todo-item"]').eq(0)
 }

 get firstTodoCheckBox(){


   return cy.get('[data-testid="complete-task"]')
   .eq(0)
 }



 //methods
 load(){

   cy.visit('/todo')
   return this

 }
 clickonAddBtn(){

   this.addBtn.click()
   return new NewTodoPage
 }

 welcomeMessageShouldBeVisible(){

   this.welcomeMessage().should('be.visible')

   return this
 }
 firstItemShouldHaveText(text){

   this.firstnewTodoItem.should('have.text', text)
   return this
 }

markFirstTodoAsCompleted(){

   this.firstTodoCheckBox.click()
   return this
}
firstItemShouldHaveBackgroundColor(color){

   return  this.firstnewTodoItem.should('have.css','background-color',color)
   return this
}
 



}export default TodoPage