const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('The chosen selections can be modified any time before clicking the \'Create!\' button', function () {

    describe('Happy path', function () {


            it('TC-083  All required fields are selected, the button is active', function () {
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

        it('TC-083.001  All previous selections are modified, the button is active', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("MariaM007");
            const inputGender = $$(sel.gender)[0].click();
            const inputAge = $(sel.age).setValue(557);
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[5].click();
            const create = $(sel.create).isEnabled();
            browser.pause(3000);
            expect(create).toEqual(true);
        });

    });
})
