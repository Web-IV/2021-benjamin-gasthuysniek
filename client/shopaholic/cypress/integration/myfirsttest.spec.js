describe('My First Test', function(){ //describe structures multiple tests
   /* it('Does not do much', function(){//it identifies individual tests
        expect(true).to.equal(true);
    });
    it('Still not doing much', function(){
        expect(true).to.equal(false);//true is expected and false is the actual value
    })*/
    it('our app runs', function(){
        cy.visit('http://localhost:4200'),
        cy.get('[data-cy=filterInput]').type('Str');
        cy.get('[data-cy=productCard]').should('have.length',1);
    });
});



