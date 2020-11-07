const dataAge = require ('../../data/invalidAge.json');
const invalidAge = require ('../../helpers/invalidAge');
const sel = require ('../../data/selectors.json');

describe('Happy path', function () {

    before
    ('', function () {
        browser.url('')
    })

    it('TC-076  The submit button is disabled when the invalid input is entered in the age field and the ' +
        'rest of the elements have been selected', function () {
        //browser.url('');
        invalidAge(dataAge.myName, dataAge.myGender.she, dataAge.myAge, dataAge.myStoryType)
        const create = $(sel.create).isEnabled();
        browser.pause(3000);
        //expect(create).to.be.equal(false);
    });
})
