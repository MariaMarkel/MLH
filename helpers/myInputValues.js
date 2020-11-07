const sel = require ('../data/selectors.json');

function myInputValues (myName, myGender, myAge, myStoryType) {

    $(sel.name).setValue(myName);
    $$(sel.gender)[myGender].click();
    $(sel.age).setValue(myAge);
    $(sel.storyClick).click();
    $$(sel.storyType)[myStoryType].click();
    $(sel.create).click();
}

module.exports = myInputValues;
