const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
//const path = require ('path');

describe('The story appears on the same page and has 3 (4 if an image was selected) main elements', function () {

    describe('Happy path', function () {


        it('TC-084  The story page has 3 main elements: the page header, a story and a \'Try again!\' button.', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("MariaM007");
            const inputGender = $$(sel.gender)[0].click();
            const inputAge = $(sel.age).setValue(557);
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[5].click();
            //const create = $(sel.create).isEnabled();
            const create = $(sel.create).click();
            browser.pause(3000);
            //expect(create).toEqual(true);
        });

        it('TC-084.001 Story header is displayed', function () {
            const storyHeader = $(sel.storyHeader).isDisplayed();
            expect(storyHeader).toEqual(true);
        });

        it('TC-084.002 Story is displayed', function () {
            const storyText = $(sel.storyHeader).isDisplayed();
            expect(storyText).toEqual(true);
        });

        it('TC-084.003 Try again button exists', function () {
            const tryAgain = $(sel.storyHeader).isDisplayed();
            expect(tryAgain).toEqual(true);
        });

        // it('TC-085  The story appears on the same page', function () {
        //     browser.url('');
        //     const inputName = $(sel.name).setValue("MariaM007");
        //     const inputGender = $$(sel.gender)[0].click();
        //     const inputAge = $(sel.age).setValue(557);
        //     const click = $(sel.storyClick).click(); // open the dropdown
        //     const inputStory = $$(sel.storyType)[5].click();
        //     const create = $(sel.create).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(true);
        // });

        it('TC-086  The story page has 4 main elements: the page header , an uploaded image, a story and ' +
            'a \'Try again!\' button.', function () {
            browser.url('');
            const inputName = $(sel.name).setValue("MariaM007");
            const inputGender = $$(sel.gender)[0].click();
            const inputAge = $(sel.age).setValue(557);
            const click = $(sel.storyClick).click(); // open the dropdown
            const inputStory = $$(sel.storyType)[5].click();
            const imageUpload = $(sel.imageUpload).click();
            const inputLink = $('.ant-upload input');
            const path = require ('path');
            const filePath = path.join((__dirname,'../../data/Bug.jpg'));
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            inputLink.setValue(remoteFilePath);

            const create = $(sel.create).click();
            browser.pause(3000);
            //expect(create).toEqual(true);
        });

        it('TC-084.001 Story header is displayed', function () {
            const storyHeader = $(sel.storyHeader).isDisplayed();
            expect(storyHeader).toEqual(true);
        });

        it('TC-084.002 Story is displayed', function () {
            const storyText = $(sel.storyHeader).isDisplayed();
            expect(storyText).toEqual(true);
        });

        it('TC-084.003 Try again button exists', function () {
            const tryAgain = $(sel.storyHeader).isDisplayed();
            expect(tryAgain).toEqual(true);
        });

        // it('TC-087  The story appears on the same page (with an image)', function () {
        //     browser.url('');
        //     const inputName = $(sel.name).setValue("MariaM007");
        //     const inputGender = $$(sel.gender)[0].click();
        //     const inputAge = $(sel.age).setValue(557);
        //     const click = $(sel.storyClick).click(); // open the dropdown
        //     const inputStory = $$(sel.storyType)[5].click();
        //     const create = $(sel.create).isEnabled();
        //     browser.pause(3000);
        //     expect(create).toEqual(true);
        // });

    });
})

