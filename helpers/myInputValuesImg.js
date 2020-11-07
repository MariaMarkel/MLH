const sel = require ('../data/selectors.json');

function myInputValuesImg (myName, myGender, myAge, myStoryType) {

    $(sel.name).setValue(myName);
    $$(sel.gender)[myGender].click();
    $(sel.age).setValue(myAge);
    $(sel.storyClick).click();
    $$(sel.storyType)[myStoryType].click();
}

module.exports = myInputValuesImg;
