describe("this test is for locked user account",()=>{
  it("check the locked user if its valid",()=>{
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("locked_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()







  })
})