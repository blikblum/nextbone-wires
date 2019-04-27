module.exports = function() {
  const {Widget} = this;

  const violet = {
    name: 'Violet',
    hex: '#4B0082',
  };

  this.Given(/^I am viewing the colors index page$/, function() {
    return this.visit('#colors');
  });

  this.When(/^I click on a color$/, () => new Widget.ColorsIndex.List().clickAt(0));

  this.Then(/^I should see the colors show page$/, () => new Widget.ColorsShow().isPresent().should.eventually.be.true);

  this.When(/^I edit a color$/, () => new Widget.ColorsIndex.List().clickAt(0).then(() => new Widget.ColorsShow().edit().then(() => new Widget.ColorsEdit.Form().clearAndSubmitWith(violet))));

  this.Then(/^I should see the information persisted$/, () => new Widget.ColorsShow().getDetails().should.eventually.deep.equal({
      name: violet.name,
      hex: violet.hex,
      state: 'Inactive',
    }));

  this.When(/^I destroy a color$/, () => new Widget.ColorsIndex.List().clickAt(0).then(() => new Widget.ColorsShow().destroy()));

  this.Then(/^I should be warned$/, () => new Widget.Modal().isVisible().should.eventually.be.true);

  this.When(/^I confirm the destruction$/, () => new Widget.Modal().confirm());

  this.Then(/^the color should be gone$/, () => new Widget.ColorsIndex.List().items().should.eventually.have.lengthOf(2));

  this.When(/^I create a new color$/, function() {
    return this.visit('#colors').then(() => new Widget.ColorsIndex().create().then(() => new Widget.ColorsCreate.Form().submitWith(violet)));
  });

  this.Then(/^I should see it on the colors index page$/, () => new Widget.ColorsIndex.List().items().should.eventually.have.lengthOf(4));

  this.When(/^I activate it$/, () => new Widget.ColorsShow().click({ text: 'Activate' }));

  this.Then(/^it should be active$/, () => new Widget.ColorsShow().isActive().should.eventually.be.true);
};
