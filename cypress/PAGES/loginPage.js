import TodoPage from "./TodoPage";

class Loginpage {
// element
get EmailInput(){

    return cy.get('[data-testid="email"]')
}
get PasswordInput(){

    return cy.get('[data-testid="password"]')
}

get SubmitBtn(){
    return cy.get('[data-testid="submit"]')

}




//Methods
load(){
    cy.visit('/')

    return this ;


}

Login(email,password){
    this.EmailInput.type(email);
    this.PasswordInput.type(password);
    this.SubmitBtn.click();
return new TodoPage
}

}export default Loginpage