// describe('URL Shortener', () => {
//     beforeEach(() => {
//       cy.clearCookies();
//       cy.clearLocalStorage();
  
//       cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
//         statusCode: 200,
//         body: {
//           urls: [{
//             id: 1,
//             long_url: 'https://example.com',
//             short_url: 'http://localhost:3001/useshorturl/1',
//             title: 'Example URL'
//           }]
//         }
//       });
  
//       cy.visit('http://localhost:3000');
//     });
  
//     it('should display the page title, form and existing URLs on load', () => {
//       cy.get('h1').contains('URL Shortener');
//       cy.get('form').should('be.visible');
//       cy.get('.url').should('have.length', 1);
//       cy.get('.url h3').contains('Example URL');
//     });
  
//     it('should reflect user input in form fields', () => {
//       cy.get('input[name="title"]').type('Test URL').should('have.value', 'Test URL');
//       cy.get('input[name="urlToShorten"]').type('https://testurl.com').should('have.value', 'https://testurl.com');
//     });
  
//     it('should render the new shortened URL after form submission', () => {
//       cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
//         statusCode: 201,
//         body: {
//           id: 2,
//           long_url: 'https://testurl.com',
//           short_url: 'http://localhost:3001/useshorturl/2',
//           title: 'Parvin'
//         }
//       });
//       cy.get('input[name="title"]').type('Parvin');
//       cy.get('input[name="urlToShorten"]').type('https://testurl.com');
//       cy.get('form').within(() => {
//         cy.get('button').click();
//       });
//       cy.get('.url').should('have.length', 2);
//       cy.get('.url h3').contains('Parvin');
//       cy.get('.url a').contains('http://localhost:3001/useshorturl/2');
//     });
  
//     it('should show an error when the server fails to shorten the URL', () => {
//       cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
//         statusCode: 400,
//         body: { error: 'Failed to shorten the URL' }
//       });
//     });
  
//     it('should not submit the form if fields are incomplete', () => {
//       cy.get('input[name="title"]').type('Test URL');
//       cy.get('form').within(() => {
//         cy.get('button').click();
//       });      
//       cy.on('window:alert', (text) => {
//         expect(text).to.contains('Both fields are required!');
//       });
//     });
//   });


describe('URL Shortener', () => {
  beforeEach(() => {
    // cy.clearCookies();
    // cy.clearLocalStorage();

    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        urls: [{
          id: 1,
          long_url: 'https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#What-you-ll-learn',
          short_url: 'http://localhost:3001/useshorturl/1',
          title: 'Farishta'
        }]
      }
    });

    cy.visit('http://localhost:3000');
  });

  it('should display the page title, form and existing URLs on load', () => {
    cy.get('h1').contains('URL Shortener');
    cy.get('form').should('be.visible');
    cy.get('.url').should('have.length', 1);
    cy.get('.url h3').contains('Farishta');
  });

  it('should reflect user input in form fields', () => {
    cy.get('input[name="title"]').type('Parvin').should('have.value', 'Parvin');
    cy.get('input[name="urlToShorten"]').type('https://testurl.com').should('have.value', 'https://testurl.com');
  });

  it('should render the new shortened URL after form submission', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: {
        id: 2,
        long_url: 'https://testurl.com',
        short_url: 'http://localhost:3001/useshorturl/2',
        title: 'Romin'
      }
    });
    cy.get('input[name="title"]').type('Romin');
    cy.get('input[name="urlToShorten"]').type('https://testurl.com');
    cy.get('form').within(() => {
      cy.get('button').click();
    });
    cy.get('.url').should('have.length', 2);
    cy.get('.url h3').contains('Romin');
    cy.get('.url a').contains('http://localhost:3001/useshorturl/2');
  });

  it('should show an error when the server fails to shorten the URL', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 400,
      body: { error: 'Failed to shorten the URL' }
    });
  });

  it('should not submit the form if fields are incomplete', () => {
    cy.get('input[name="title"]').type('Parvin');
    cy.get('form').within(() => {
      cy.get('button').click();
    });      
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Both fields are required!');
    });
  });
});
