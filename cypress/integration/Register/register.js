import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
var data = require('../../fixtures/data.json')

Given('I open Registration Link', ()=>{
    cy.visit(Cypress.env("url"))
})

When('I fill in registration details', ()=>{
    cy.get('[id="customer.firstName"]').type(data.firstname)
    cy.get('[id="customer.lastName"]').type(data.lastname)
    cy.get('[id="customer.address.street"]').type(data.street)
    cy.get('[id="customer.address.city"]').type(data.city)
    cy.get('[id="customer.address.state"]').type(data.state)
    cy.get('[id="customer.address.zipCode"]').type(data.zip)
    cy.get('[id="customer.phoneNumber"]').type(data.phone)
    cy.get('[id="customer.ssn"]').type(data.ssn)
    cy.get('[id="customer.username"]').type(data.username)
    cy.get('[id="customer.password"]').type(data.password)
    cy.get('[id="repeatedPassword"]').type(data.password)   
})

And('I click on Register Button', () =>{
    cy.get('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input').click()
})

Then('I should see Welcome message',()=>{
    cy.get('.title').should('contain.text',data.username);
})

