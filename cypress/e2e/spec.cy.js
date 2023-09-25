//1. When a user visits the page, they can view the page title, form and the existing shortened URLs

describe('URL Shortener', () => {
  beforeEach(() => {
    // Stubbing the GET request
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      body: {
        urls: [
          // Example data based on what the server might send back
          {
            id: 1,
            long_url: 'https://example.com',
            short_url: 'http://localhost:3001/useshorturl/1',
            title: 'Example URL'
          }
        ]
      }
    })
    cy.visit('http://localhost:3000');
  });

  it('should display the page title, form and existing URLs on load', () => {
    cy.get('h1').contains('URL Shortener');
    cy.get('form').should('be.visible');
    cy.get('.url').should('have.length', 1);
    cy.get('.url h3').contains('Example URL');
  });
});

//2. When a user fills out the form, the information is reflected in the input field values

it('should reflect user input in form fields', () => {
  cy.get('input[name="title"]').type('Test URL').should('have.value', 'Test URL');
  cy.get('input[name="urlToShorten"]').type('https://testurl.com').should('have.value', 'https://testurl.com');
});


//3. When a user fills out and submits the form, the new shortened URL is rendered

it('should render the new shortened URL after form submission', () => {
  // Stubbing the POST request
  cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
    statusCode: 201,
    body: {
      id: 2,
      long_url: 'https://testurl.com',
      short_url: 'http://localhost:3001/useshorturl/2',
      title: 'Test URL'
    }
  });

  // Filling out the form and submitting
  cy.get('input[name="title"]').type('Test URL');
  cy.get('input[name="urlToShorten"]').type('https://testurl.com');
  cy.get('button').click();

  // Check that the new URL is rendered
  cy.get('.url').should('have.length', 2);
  cy.get('.url h3').contains('Test URL');
  cy.get('.url a').contains('http://localhost:3001/useshorturl/2');
});
