const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Functionality of Create Button', function () {

    describe('Happy path', function () {


        it('TC-068 Button\'s name is \'Create!\'', function () {
            browser.url('');
            const text = $(sel.create).getText();
            expect(text).toEqual(exp.labelCreate);
        });

        it('TC-069 The button is inactive', function () {
            browser.url('');
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(false);
        });

        it('TC-070  The button is active when all required fields are selected', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("Maria");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).setValue(10);
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });

    });
})