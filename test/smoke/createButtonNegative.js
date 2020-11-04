const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Create Button stays inactive before options 1-4 are selected', function () {

    describe('Happy path', function () {


        it('TC-071 The submit button is disabled when the name is entered but the rest of the ' +
            'elements are NOT selected', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Maria");
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-072 The submit button is disabled when the gender is selected but the rest of the ' +
            'elements are NOT selected', function () {
            browser.url('');
            const inputGender = $$(sel.gender)[1].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-073  The submit button is disabled when the age is entered but the rest of the ' +
            'elements are NOT selected', function () {
            browser.url('');
            const inputAge = $(sel.age).setValue(10);
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-074  The submit button is disabled when the story type is selected but the rest of the ' +
            'elements are NOT selected', function () {
            browser.url('');
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-075  The submit button is disabled when the invalid input is entered in the name field and ' +
            'the rest of the elements have been selected', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Guinevere-Caoilfhoinn Blaithnaid Jr. O'Suilleabhain Mac Giolla Mhairtin");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(10);
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-076  The submit button is disabled when the invalid input is entered in the age field and the ' +
            'rest of the elements have been selected', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Maria");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(-1);
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-077  The submit button is disabled when only 2 options are selected: ' +
            'name input field and story type', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Maria");
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-078  The submit button is disabled when only 2 options are selected: gender and age', function () {
            browser.url('');
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(10);
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-079  The submit button is disabled when only 2 options are selected: name and gender.', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Maria");
            const inputGender = $$(sel.gender)[1].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-080  The submit button is disabled when only 2 options are selected: age and story type', function () {
            browser.url('');
            const inputAge = $(sel.age).setValue(10);
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-081  Verify the submit button is disabled when only 2 options are selected: name and age', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Maria");
            const inputAge = $(sel.age).setValue(10);
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-082  The submit button is disabled when only 2 options are selected: gender and story type.', function () {
            browser.url('');
            const inputGender = $$(sel.gender)[1].click();
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

    });
})
