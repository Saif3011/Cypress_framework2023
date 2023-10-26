import { faker } from '@faker-js/faker';

class UserApi {
   static register(){
return cy.request({
    url:"/api/v1/users/register",
    method:"POST",
    body:{
        firstName :faker.internet.userName(),
            lastName :faker.internet.userName(),
            email:faker.internet.email(),
            password:faker.internet.password(),
    },
})






}




}

export default UserApi;