import '@testing-library/cypress/add-commands';
const TodayDate = require("dayjs")().format("M/DD/YY");

// This command is used to close guide

Cypress.Commands.add('closeguide', (long_wait, short_wait) => {
    cy.wait(long_wait);
    cy.get('body').then(($body) => {
        let text = $body.text();
        let result = text.includes("Welcome to Honswer");
        if (result) {
            cy.contains('Welcome to Honswer').parent().parent().prev().click({ force: true });
            cy.wait(short_wait)
        }
        else {
            cy.log('feed back pop up not found')
        }
    })
})

// This command is used to login

Cypress.Commands.add('login', (email, password, account, Timenow, long_wait) => {
    cy.contains('Login').click({ force: true });
    cy.contains('Log In ').click({ force: true });
    let Username = email + Timenow + account;
    cy.get('input[type="email"]').eq(0).type(Username).should('have.value', Username)
    cy.get('input[type="password"]').eq(0).type(password).should('have.value', password)
    cy.get('button').contains('Log In').click({ force: true });
    cy.wait(long_wait)
    cy.findAllByText('My requests').should('be.visible')
})

// This command is used to signup

Cypress.Commands.add('signup', (Timenow, email, password, account, long_wait, short_wait) => {
    let Username = email + Timenow + account;
    cy.contains('Login').click({ force: true });
    cy.wait(short_wait)
    cy.contains('Sign Up').click({ force: true });
    cy.wait(short_wait)
    cy.get('input[type="email"]').eq(1).type(Username).should('have.value', Username)
    cy.get('input[type="password"]').eq(1).type(password).should('have.value', password)
    cy.wait(short_wait)
    cy.get('button').contains('Sign Up').click({ force: true });
    cy.wait(long_wait)
    cy.findAllByText('My requests').should('be.visible')
})

// This command is used to request feedback

Cypress.Commands.add('requestfeedback', () => {
    cy.contains('Request feedback').click({ force: true });
})

// This command is used to Title

Cypress.Commands.add('Title_request', (Timenow, long_wait, short_wait) => {
    cy.wait(long_wait)
    cy.contains('What is your feedback request about?').next().clear().type("Automations Testing - Question " + Timenow)
    cy.wait(short_wait)
    cy.findAllByText('Language').parent().find('select').eq(0).select('Welsh');
    cy.get('[id="dropdownCustom"]').select('Professional');
    // cy.contains('Category').next().next().find('select').select('Professional');
    cy.wait(short_wait)
    cy.contains('Next').click({ force: true });
})

// This command is used to Budget

Cypress.Commands.add('Budget', (short_wait) => {
    cy.wait(short_wait)
    cy.get('[class="ionic-toggle toggle-royal"]').click({ force: true });
    cy.findAllByText('What is the total budget of the prizes you\'ll award?').parent().parent().next().find('[inputmode="numeric"]').clear().type("10")
    cy.findAllByText('What is the minimum amount of an individual prize?').parent().parent().next().find('[inputmode="numeric"]').clear().type("10")
    cy.findAllByText('What is the minimum number of honswers that may receive a prize?').parent().parent().next().find('[inputmode="numeric"]').clear().type("1")
    cy.findAllByText('For how long will this request offer prizes?').parent().parent().next().find('[inputmode="numeric"]').clear().type("1")
    cy.wait(short_wait)
    cy.findAllByText('Next').eq(1).click({ force: true });
})

// This command is used to Description

Cypress.Commands.add('Description', (Timenow, short_wait) => {
    cy.wait(short_wait)
    cy.contains('Context of your request').next().clear().type("Automations Testing Description" + Timenow)
    cy.wait(short_wait)
    cy.findAllByText('Next').eq(2).click({ force: true });
})

// This command is used to Add Questions

Cypress.Commands.add('Questions', (short_wait) => {
    cy.wait(short_wait)
    cy.findAllByText('+ Add a question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Question type').parent().next().select("Free text", { force: true });
    cy.findAllByText('Instructions').parent().prev().clear().type("Question type Text")
    cy.findAllByText('Instructions').parent().next().clear().type("Instructions Text")
    cy.findAllByText('Add this question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('+ Add a question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Question type').parent().next().select("Number", { force: true });
    cy.findAllByText('Instructions').parent().prev().clear().type("Question type Number")
    cy.findAllByText('Instructions').parent().next().clear().type("Instructions Number")
    cy.findAllByText('Add this question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('+ Add a question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Question type').parent().next().select("Rating", { force: true });
    cy.findAllByText('Instructions').parent().prev().clear().type("Question type Rating")
    cy.findAllByText('Instructions').parent().next().clear().type("Instructions Rating")
    cy.findAllByText('Add this question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('+ Add a question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Question type').parent().next().select("Options");
    cy.findAllByText('Instructions').parent().prev().clear().type("Question type Options")
    cy.findAllByText('Instructions').parent().next().clear().type("Instructions Options")
    cy.findAllByText('+ Add an answer option').click({ force: true });
    cy.findAllByText('Answer option').parent().next().clear().type("Answer option 1")
    cy.findAllByText('Option description').parent().next().clear().type("Option description 1")
    cy.findAllByText('Add this option').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('+ Add an answer option').click({ force: true });
    cy.findAllByText('Answer option').parent().next().clear().type("Answer option 2")
    cy.findAllByText('Option description').parent().next().clear().type("Option description 2")
    cy.findAllByText('Add this option').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('+ Add an answer option').click({ force: true });
    cy.findAllByText('Answer option').parent().next().clear().type("Answer option 3")
    cy.findAllByText('Option description').parent().next().clear().type("Option description 3")
    cy.findAllByText('Add this option').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Add this question').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Next').eq(3).click({ force: true });
})

// This command is used to Visibility

Cypress.Commands.add('Visibility', (short_wait) => {
    cy.wait(short_wait)
    cy.findAllByText('Next').eq(3).click({ force: true });
})

// This command is used to Review

Cypress.Commands.add('Review', (long_wait) => {
    cy.wait(long_wait)
    cy.findAllByText('Check and publish').click({ force: true });
    cy.wait(long_wait)
    cy.findAllByText('Confirm payment').eq(1).click({ force: true });
    cy.wait(long_wait)
})

// This command is used to logout

Cypress.Commands.add('logout', (short_wait) => {
    cy.wait(short_wait)
    cy.findAllByText('My honswers').parent().parent().parent().next().find('div:nth-child(2) > div:nth-child(2)').eq(0).click({ force: true });
    cy.findAllByText('Log Out').click({ force: true });
})

// This command is used to find created request

Cypress.Commands.add('findcreatedrequest', (Timenow, LANGUAGE, short_wait) => {
    cy.contains('MY INTERESTS').parent().parent().next().contains('LANGUAGE').parent().next().click();
    cy.wait(short_wait);
    cy.get('[class="select2-results__options"]').findAllByText('Welsh').click({ force: true });
    cy.wait(short_wait);
    cy.contains('MY INTERESTS').parent().parent().next().contains(LANGUAGE).parent().next().click();
    cy.wait(short_wait);
    cy.get('[class="select2-results__options"]').findAllByText('English').click({ force: true });
    cy.wait(short_wait);
    let request = "Automations Testing - Question " + Timenow
    findElem(request);
})

// This command is used to provide honswer

Cypress.Commands.add('provideshonswer', (Text, Number, Option, short_wait) => {
    cy.wait(short_wait)
    cy.contains('Question type Text').parent().parent().next().find('textarea').clear().type(Text)
    cy.contains('Question type Number').parent().parent().next().find('input').clear().type(Number)
    cy.get('[class="rating-stars"]').eq(0).click(150, 0, { force: true });
    cy.contains('Question type Options').parent().parent().next().find('select').select(Option);
    cy.wait(short_wait)
})

// This command is used to submit honswer

Cypress.Commands.add('submitshonswer', (short_wait) => {
    cy.wait(short_wait)
    cy.contains('Submit honswer').click({ force: true });
    cy.wait(short_wait)
})

// This command is used to submit without login

Cypress.Commands.add('submitwithoutloggingin', (short_wait) => {
    cy.wait(short_wait)
    cy.contains('Submit without logging in').click({ force: true });
    cy.wait(short_wait)
})

// This command is used open My requests

Cypress.Commands.add('Myrequests', (Timenow, long_wait, short_wait) => {
    cy.findAllByText('My requests').click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Overview').click({ force: true });
    cy.wait(short_wait)
    let request = "Automations Testing - Question " + Timenow
    findMyrequests(request, Timenow);
    cy.wait(long_wait)
    cy.get('[class="rating-stars"]').eq(0).click(150, 0, { force: true });
    cy.get('[class="rating-stars"]').eq(1).click(150, 0, { force: true });
    cy.get('[class="rating-stars"]').eq(2).click(150, 0, { force: true });
    cy.get('[class="rating-stars"]').eq(3).click(150, 0, { force: true });
    cy.get('[class="rating-stars"]').eq(4).click(150, 0, { force: true });
    cy.findAllByText('COMMENT FOR THE HONSWERER').parent().next().clear().type("Automations Testing Description" + Timenow)
    cy.wait(short_wait)
    cy.findAllByText('Rate and open report').click({ force: true });
    cy.wait(long_wait)
})

// This command is used Award

Cypress.Commands.add('award', (short_wait) => {
    cy.findAllByText('Award').eq(1).click({ force: true });
    cy.wait(short_wait)
    cy.findAllByText('Confirm award').click({ force: true });
    cy.wait(short_wait)
})

// This command is used to Notification

Cypress.Commands.add('notifications', (short_wait, Timenow) => {
    cy.wait(short_wait)
    cy.findAllByText('My honswers').parent().parent().parent().next().find('div:nth-child(2) > div:nth-child(2)').eq(0).click({ force: true });
    cy.findAllByText('Activity').click({ force: true });
    cy.wait(short_wait)
    cy.wait(short_wait)
    cy.findAllByText('Notifications').eq(1).parent().parent().next().next().find('div > div:nth-child(1)').then(($div) => {
        const text = $div.text()
        expect(text).to.include("Automations Testing - Question "+ Timenow)
    })  
})

function findElem(targetSelector) {
    cy.findAllByText('New requests').parent().parent().parent().parent().next().next().then($container => {
        // var a = expect("targetSelector").to.contain("targetSelector")
        let text = $container.text();
        let result = text.includes(targetSelector);
        if (result) {
            return true;
        } else {
            return false;
        }
    }).then(found => {
        if (found) {
            cy.contains(targetSelector).parent().next().click();;
        } else {
            cy.findAllByText('').click({ force: true });
            cy.wait(1000)
            findElem(targetSelector)
        }
    });
}

function findMyrequests(targetSelector, Timenow) {
    cy.findAllByText('My requests').parent().parent().parent().parent().next().next().then($container => {
        let text = $container.text();
        let result = text.includes(targetSelector);
        if (result) {
            return true;
        } else {
            return false;
        }
    }).then(found => {
        if (found) {
            cy.findAllByText('Automations Testing - Question ' + Timenow).parent().parent().next().find('[title="Rate this sincquest\'s honswers"]').click({ force: true });
        } else {
            cy.findAllByText('').click({ force: true });
            cy.wait(1000)
            findMyrequests(targetSelector, Timenow)
        }
    });
}