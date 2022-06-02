
describe("Selects, checkBox e radionButtons",() => {
    before("acessar url", () => {
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    })

it("validar selects", () => {
    cy.get('#dropdowm-menu-1').should("be.visible").select('JAVA').should('have.value', 'java')

})

it.only("validar checkBox",() =>{
 cy.get('input[value="option-1"]').check().should('be.checked')
 cy.get('input[value="option-3"]').should('be.checked').uncheck().should('be.not.checked')

})

it.only("Validar Radio button",() =>{
    cy.get('input[value="blue"]').check().should('be.checked')
    cy.get('[type="radio"]').check('uellow').should('be.checked')

})

/*it.only("Desabilitar Radion Button",() =>{
    cy.get('input[value="blue"]').


})*/


})

