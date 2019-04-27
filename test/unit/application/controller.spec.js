describe('application/application', () => {
  beforeEach(function() {
    this.layoutView = { render: stub() };
    this.LayoutView = stub().returns(this.layoutView);

    this.Controller = proxyquire('../../src/application/application.js', {
      './layout-view': this.LayoutView,
      jquery: global.$,
    }).default;

    this.module = new this.Controller();
  });

  describe('#initialize', () => {
    beforeEach(function() {
      this.module.initialize();
    });

    it('should create a layout', function() {
      expect(this.LayoutView).to.have.been.calledWithNew;
      expect(this.module).to.have.property('layout');
    });
  });
});
