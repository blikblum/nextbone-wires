module.exports = function() {
  const {Widget} = this;

  this.Given(/^I view the books list$/, function() {
    return this.visit('#books');
  });

  this.When(/^I view a new book$/, () => new Widget.BooksLibrary().clickAt(1));

  this.Then(/^I should see the book marked as active$/, () => new Widget.BooksLibrary().isActive(1).should.eventually.be.true);

  this.Then(/^I should see the book details$/, () => new Widget.BooksLibrary().at(1).then((book) => new Widget.BooksViewer().getTitle().then((title) => book.getTitle().should.eventually.equal(title))));

  this.When(/^I view a book$/, function() {
    return this.visit('#books/2');
  });

  this.When(/^I refresh the page$/, function() {
    return this.driver.executeScript('window.location = window.location');
  });

  this.Then(/^I should see the same book$/, () => new Widget.BooksLibrary().isActive(1).should.eventually.be.true);
};
