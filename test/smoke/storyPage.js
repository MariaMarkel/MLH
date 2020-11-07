const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require ('../../data/myTestData.json');
const myInputValues = require ('../../helpers/myInputValues');
const myInputValuesImg = require ('../../helpers/myInputValuesImg');
const path = require ('path');
import { expect } from 'chai';

describe('The story appears on the same page and has 3 (4 if an image was selected) main elements', function () {

    describe('The story page has 3 main elements: the page header, a story and a \'Try again !\' button.', function () {


        it('TC-084  Happy path to story page: Try again button exists', function () {
            browser.url('');
            myInputValues(data.myName, data.myGender.she, data.myAge, data.myStoryType)
            browser.pause(3000);
            const tryAgain = $(sel.tryAgain).isDisplayed();
            browser.pause(3000);
            expect(tryAgain).to.be.equal(true);
        });

        it('TC-084.001 Story header is displayed', function () {
            const storyHeader = $(sel.storyHeader).isDisplayed();
            expect(storyHeader).to.be.equal(true);
        });

        it('TC-084.002 No image is displayed on the story page', function () {
                const storyImage = $(sel.storyImage).isDisplayed();
                expect(storyImage).to.be.equal(false);
            });

        it('TC-084.003 Story is displayed', function () {
            const storyText = $(sel.storyText).isDisplayed();
            expect(storyText).to.be.equal(true);
        });


        it('TC-085  The story appears on the same page', function () {
            browser.url('');
            const appUrl = browser.getUrl();
            myInputValues(data.myName, data.myGender.she, data.myAge, data.myStoryType)
            browser.pause(3000);
            const storyUrl = browser.getUrl();
            expect(appUrl).to.be.equal(storyUrl);
        });


    });

    describe('The story page has 4 main elements: the page header, an uploaded image, a story and a \'Try again !\' button.', function () {

        it('TC-086  Happy path to story page: Try again button exists' , function () {
            browser.url('');
            myInputValuesImg(data.myName, data.myGender.she, data.myAge, data.myStoryType)

            const fileUpload = $('.ant-upload input');
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            const filePath = path.join(__dirname, "../../data/Bug.jpg");
            fileUpload.setValue(filePath);
            $(sel.create).click();

            const tryAgain = $(sel.tryAgain).isDisplayed();
            browser.pause(3000);
            expect(tryAgain).to.be.equal(true);

        });

        it('TC-086.001 Story header is displayed', function () {
            const storyHeader = $(sel.storyHeader).isDisplayed();
            expect(storyHeader).to.be.equal(true);
        });

        it('TC-086.002 An image is displayed on the story page', function () {
                const storyImage = $(sel.storyImage).isDisplayed();
                expect(storyImage).to.be.equal(true);
            });

        it('TC-086.003 Story is displayed', function () {
            const storyText = $(sel.storyHeader).isDisplayed();
            expect(storyText).to.be.equal(true);
        });

        it('TC-087  The story appears on the same page (with an image)', function () {
           browser.url('');
           const appUrl = browser.getUrl();
           myInputValuesImg(data.myName, data.myGender.she, data.myAge, data.myStoryType)
           const fileUpload = $('.ant-upload input');
           browser.execute(
            (el) => el.style.display = 'block',
            fileUpload
        );
           fileUpload.waitForDisplayed();
           const filePath = path.join(__dirname, "../../data/Bug.jpg");
           fileUpload.setValue(filePath);
           $(sel.create).click();
           browser.pause(3000);
           const storyUrl = browser.getUrl();
           expect(appUrl).to.be.equal(storyUrl);
        });

    });
})
