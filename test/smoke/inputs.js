const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
import { expect } from 'chai';

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
                expect(name).to.be.equal(true);
        });

        it('TC-015 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).to.be.equal(true);
        });

        it('TC-016 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).to.be.equal(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).to.be.equal(true);
        });

        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).to.be.equal(true);
        });
        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).to.be.equal(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).to.be.equal(true);
        });
    });
})

