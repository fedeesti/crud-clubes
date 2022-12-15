import { BASE_URL, API_URL, HomePage, expectedAmountOfTeams } from '../support/constants';

beforeEach(() => {
  cy.visit(BASE_URL);
});

describe('Home page management', () => {
  it('Test that the home page and the list of teams load', () => {
    cy.intercept('GET', API_URL, { fixture: 'teams-list.json' }).as('ListOfTeams');
    cy.visit(BASE_URL);
    cy.wait('@ListOfTeams');
    cy.title().should('eq', 'CRUD-clubes');
    cy.get(HomePage.title).contains('LIST OF TEAMS');
    cy.get(HomePage.teamsTable).should('be.visible');
    cy.get(HomePage.tableHead)
      .first()
      .should('have.text', 'Team name')
      .next()
      .should('have.text', 'Country')
      .next()
      .should('have.text', 'Actions');
    cy.get(HomePage.teamsTable).find('tbody > tr').should('have.length', expectedAmountOfTeams);
    cy.get(HomePage.teamActions)
      .find('a')
      .first()
      .should('have.text', 'Watch')
      .next()
      .should('have.text', 'Edit')
      .next()
      .should('have.text', 'Delete');
  });
});
