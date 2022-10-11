import { getGreeting } from '../support/app.po';
import {movieApiConfig} from "../../../lastname/src/app/movie-config";

describe('lastname', () => {
  beforeEach(() => cy.visit('/'));



  it('First title should be now playing', () => {

    cy.visit('http://localhost:4200/')
    cy.get('h1').first().contains('Now Playing')

  });
  it('Second title should be now playing', () => {

    cy.get('h1').last().contains('Popular Movies')


  });

  it('When Titanic is typed on search, exact/same movie should be found', () => {
    cy.visit('http://localhost:4200/movie-search');
    cy.get('input').type('titanic')
    cy.get('.mat-button-wrapper', { timeout: 10000 }).should('be.visible');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
    cy.get('body > last-root > last-movie-search-page > div > section > last-result-tile > div > mat-card:nth-child(1) > mat-grid-list > div > mat-grid-tile:nth-child(2) > div > mat-card-content > mat-card-header > div.mat-card-header-text > mat-card-title > a > span.mat-button-wrapper').contains('Titanic');



  });


});
