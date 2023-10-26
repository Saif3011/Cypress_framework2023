import TodoPage from "./TodoPage"

class NewTodoPage {
//elements
get newTodoInput(){

    return cy.get('[data-testid="new-todo"]')

}

get submitNewtodoBtn(){

    return cy.get('[data-testid="submit-newTask"]')
}
 

    
 

//Methods

load(){
    cy.visit('/todo/new')
}

addNewTodo(item){
this.newTodoInput.type(item)
this.submitNewtodoBtn.click()

return new TodoPage
}


}export default NewTodoPage