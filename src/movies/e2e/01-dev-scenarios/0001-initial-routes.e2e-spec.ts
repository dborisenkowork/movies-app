import {browser, by, element, protractor, ProtractorExpectedConditions} from 'protractor';

const EC: ProtractorExpectedConditions = protractor.ExpectedConditions;

describe('01-dev-scenarios/0001-initial-routes.e2e-spec.ts', () => {
    it('will redirect to 404 in case of unknown path (global)', () => {
        browser.get('/this-route-should-not-be-available');
        EC.urlIs('/favorites/list');
        expect(element(by.css('[data-e2e-element="452f"]')).isPresent()).toBeTruthy();
    });

    it('can show Index route but user will be redirected to Favorites/List route', () => {
        browser.get('/');
        EC.urlIs('/favorites/list');
        expect(element(by.css('[data-e2e-element="45fa"]')).isPresent()).toBeTruthy();
    });

    it('can show Favorites route but user will be redirected to Favorites/List route', () => {
        browser.get('/favorites');
        EC.urlIs('/favorites/list');
        expect(element(by.css('[data-e2e-element="45fa"]')).isPresent()).toBeTruthy();
    });

    it('can show List Favorites route', () => {
        browser.get('/favorites/list');
        EC.urlIs('/favorites/list');
        expect(element(by.css('[data-e2e-element="45fa"]')).isPresent()).toBeTruthy();
    });

    it('can show View Favorite route but will be redirected to Favorite List', () => {
        browser.get('/favorites/view');
        EC.urlIs('/favorites/list');
    });

    it('can show View Favorite route but will be redirected to Favorite List (on unknown id)', () => {
        browser.get('/favorites/view/unknown-id');
        EC.urlIs('/favorites/list');
    });

    it('will redirect to 404 in case of unknown path (Favorites)', () => {
        browser.get('/favorites/this-route-should-not-be-available');
        EC.urlIs('/');
        expect(element(by.css('[data-e2e-element="452f"]')).isPresent()).toBeTruthy();
    });
});
