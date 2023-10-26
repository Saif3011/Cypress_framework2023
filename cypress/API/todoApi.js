
import { faker } from '@faker-js/faker';

 class TodoApi {
   static addNewTodoMark(token){
return cy.request({
    url:"/api/v1/tasks",
    method:"POST",
    auth :{
        bearer :token,
    },
    body:{
        isCompleted: false,
        item:"learn Cypress",
    },
});

}



} export default TodoApi ;