import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
var data = require('../../fixtures/data.json')
var body;

Given('I open ParaBank', ()=>{
    cy.visit(Cypress.env("url"))
})

When('I enter UserName and Password', ()=>{
    cy.get('[name="username"]').type(data.username)
    cy.get('[name="password"]').type(data.password)    
})

And('I click on Submit', () =>{
    cy.get('[value="Log In"]').click()
})

Then('I should see my Dashboard',()=>{
    cy.get("#leftPanel > p > b").should('contain.text',"Welcome");
})


When('I request User Details', ()=>{
    cy.request('GET',Cypress.env("baseURL")+"/users?page=2").then((response)=>{
        expect(response.status).to.eq(200)
    body=response.body;
})
})

Then('I should receive them', ()=>{
cy.log(`Response is : ${body}`)
})