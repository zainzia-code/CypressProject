const Timenow = require("dayjs")().format("DDMMYYHHmmss");

describe('Honswer Test Suite', () => {
    before(() => {
      cy.visit('/')
    })

    beforeEach(function () {
      cy.viewport(window.screen.width, window.screen.height)
      cy.fixture('honswertest').then(function (data) {
        this.data = data;
      })
    })

    it('TC 1 - Creates an award request with one question of each type and pays for an award for at least 3 honswers', function () {
      cy.closeguide(this.data.long_wait, this.data.short_wait);
      cy.login(this.data.email, this.data.password, this.data.account, this.data.UserA, this.data.long_wait);
      cy.requestfeedback();
      cy.Title_request(Timenow, this.data.long_wait, this.data.short_wait);
      cy.Budget(this.data.short_wait);
      cy.Description(Timenow, this.data.short_wait);
      cy.Questions(this.data.short_wait);
      cy.Visibility(this.data.short_wait);
      cy.Review(this.data.long_wait);
      cy.logout(this.data.short_wait);
    })

    it('TC 2 - LOGIN with User B account and Finds the created request in the list of new requests and Provides an honswer', function () {
      cy.reload(true);
      cy.closeguide(this.data.long_wait, this.data.short_wait);
      cy.login(this.data.email, this.data.password, this.data.account, this.data.UserB, this.data.long_wait);
      cy.findcreatedrequest(Timenow, "Welsh", this.data.short_wait);
      cy.provideshonswer("Automations Testing Description with Stripe account", 1, "Answer option 1", this.data.short_wait);
      cy.submitshonswer(this.data.short_wait);
      cy.logout(this.data.short_wait);
    })

    it('TC 3 - Without LOGIN finds the created request and Provides an honswer', function () {
      cy.reload(true);
      cy.closeguide(this.data.long_wait, this.data.short_wait);
      cy.findcreatedrequest(Timenow, "Welsh", this.data.short_wait);
      cy.provideshonswer("Automations Testing Description without LOGIN account", 2, "Answer option 2", this.data.short_wait);
      cy.submitshonswer(this.data.short_wait);
      cy.submitwithoutloggingin(this.data.short_wait);
    })

    it.skip('TC 4 - Logs in with social account and Finds the created request and Provides an honswer', function () {
      cy.sociallogin(this.data.email, this.data.password, this.data.account, 'UserSA', this.data.long_wait);
    })

    it('TC 5 - User A - Rates User B honswers - Awards user B with part of the prize money', function () {
      cy.closeguide(this.data.long_wait, this.data.short_wait);
      cy.login(this.data.email, this.data.password, this.data.account, this.data.UserA, this.data.long_wait);
      cy.Myrequests(Timenow, this.data.long_wait, this.data.short_wait)
      cy.award(this.data.short_wait)
      cy.logout(this.data.short_wait);
    })

    it('TC 6 - When award expiration date is reached: User B receives the awarded amount from the prize money', function () {
      cy.reload(true);
      cy.closeguide(this.data.long_wait, this.data.short_wait);
      cy.login(this.data.email, this.data.password, this.data.account, this.data.UserB, this.data.long_wait);
      cy.notifications(this.data.short_wait, Timenow);
    })
  
})
