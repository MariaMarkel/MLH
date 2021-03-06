const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require ('../../data/myTestData.json');
const myInputValuesImg = require ('../../helpers/myInputValuesImg');
import { expect } from 'chai';

describe('Functionality of Create Button', function () {

    describe('Happy path', function () {


        it('TC-068 Button\'s name is \'Create!\'', function () {
            browser.url('');
            const text = $(sel.create).getText();
            expect(text).to.be.equal(exp.labelCreate);
        });

        it('TC-069 The button is inactive', function () {
            browser.url('');
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).to.be.equal(false);
        });

        it('TC-070  The button is active when all required fields are selected', function () {
            browser.url('');
            myInputValuesImg(data.myName, data.myGender.she, data.myAge, data.myStoryType)
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).to.be.equal(true);
        });

    });
})
