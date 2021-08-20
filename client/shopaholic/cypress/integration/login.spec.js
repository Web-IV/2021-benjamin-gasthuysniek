describe('Login Test', function(){ //describe structures multiple tests
  
    it('login', function(){
        cy.server({delay: 1000}); //the requests will pass throught this server
       
        
        cy.visit('/');
        
        //baseurl from cypress.json
        cy.get('[data-cy=login-email]').should('have.length',1);
        cy.get('[data-cy=login-password]').should('have.length',1);
        cy.get('[data-cy=login-email]').type('niek.gasthuys.y9891@student.hogent.be');
        cy.get('[data-cy=login-password]').type('Nieker@12345');
        cy.get('[data-cy=login-button]').should('be.visible');       

  }
)
        
    });
    describe('Register Test', function(){ //describe structures multiple tests
  
        it('register', function(){
            cy.server({delay: 1000}); //the requests will pass throught this server
           
            
            cy.visit('/register');
            cy.get('[data-cy=register-button]').should('be.visible');   
      }
    )
            
        });
    

