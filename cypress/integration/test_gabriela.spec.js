/// <reference types="cypress" />

describe ("teste de botões", () => {

    it ('validar botão ao clicar', () => {
        cy.visit( 
            "https://automacaocombatista.herokuapp.com/buscaelementos/botoes" );
            cy.get('[id="teste"]').click();
            cy.get("#div1 > h5").should("have.text","Você Clicou no Botão!");    
    });


    it ("validando botão submitir", () => {
        cy.visit( 
            "https://automacaocombatista.herokuapp.com/buscaelementos/botoes" );
            cy.get('button[type=sumit]').as('submitBtn')
            cy.get("#div1 > h5").should("have.text","Você Clicou no Botão!");    


    });

    it.only ("validando input name", () => {
        cy.visit( 
            "https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield"
             );
            cy.get('[id="first_name"]').type("Gabriela");
            cy.get('[id="first_name"]').should("have.value","Gabriela");    


    });  
    
    it.only ("validando input sobrenome", () => {
        cy.visit( 
            "https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield"
             );
            cy.get('[id="last_name"]').type("Onofre");
            cy.get('[id="last_name"]').should("have.value","Onofre");    


    });  


    it.only ("validando input senha", () => {
        cy.visit( 
            "https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield"
             );
            cy.get('[id="password"]').type("teste");
            cy.get('[id="password"]').should("have.value","teste");    


    });  
    
    it.only ("validando input email", () => {
        cy.visit( 
            "https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield"
             );
            cy.get('[id="email"]').type("teste@gmail.com");
            cy.get('[id="email"]').should("have.value","teste@gmail.com");    


    });  
    it.only ("validando input textarea", () => {
        cy.visit( 
            "https://automacaocombatista.herokuapp.com/buscaelementos/inputsetextfield"
             );
            cy.get('[id="textarea1"]').type("Estou fazendo o curso de Cypress");
            cy.get('[id="textarea1"]').should("have.value","Estou fazendo o curso de Cypress");    


    });  

});
