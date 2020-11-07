const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require ('../../data/myTestData.json');
const myInputValuesImg = require ('../../helpers/myInputValuesImg');
import { expect } from 'chai';

describe('The chosen selections can be modified any time before clicking the \'Create!\' button', function () {

    describe('Happy path', function () {


            it('TC-083  All required fields are selected, the button is active', function () {
            browser.url('');
            myInputValuesImg(data.myName, data.myGender.she, data.myAge, data.myStoryType)
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).to.be.equal(true);
        });

        it('TC-083.001  All previous selections are modified, the button is active', function () {
            myInputValuesImg(data.myName, data.myGender.she, data.myAge, data.myStoryType)
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).to.be.equal(true);
        });

    });
})
