describe('colors/show/view', () => {
  beforeEach(function() {
    this.template = stub();

    this.model = new Backbone.Model();
    this.model.url = 'foo';

    this.View = proxyquire('../../src/colors/show/view.js', {
      './template.hbs': this.template,
    }).default;

    this.itemView = new this.View({ model: this.model });
  });

  describe('#initialize', () => {
    beforeEach(function() {
      this.itemView.initialize({ model: this.model });
    });

    it('should attach the model', function() {
      expect(this.itemView).to.have.ownProperty('model', this.model);
    });
  });

  describe('#templateHelpers', () => {
    beforeEach(function() {
      spy(this.itemView, 'templateHelpers');
      this.model.validationError = 'foo';
      this.model.serverError = 'bar';
      this.itemView.templateHelpers();
    });

    it('should return model errors', function() {
      expect(this.itemView.templateHelpers).to.have.returned({
        errors: this.model.validationError,
      });
    });
  });

  describe('#handleToggle', () => {
    beforeEach(function() {
      this.itemView.handleToggle();
    });
  });

  describe('#handleToggleFailure', () => {
    beforeEach(function() {
      this.itemView.handleToggleFailure();
    });
  });

  describe('#handleDestroy', () => {
    beforeEach(function() {
      this.itemView.handleDestroy();
    });
  });

  describe('#handleConfirmDestroy', () => {
    beforeEach(function() {
      this.itemView.handleConfirmDestroy();
    });
  });

  describe('#handleCancelDestroy', () => {
    beforeEach(function() {
      this.itemView.handleCancelDestroy();
    });
  });

  describe('#handleDestroySuccess', () => {
    beforeEach(function() {
      this.itemView.handleDestroySuccess();
    });
  });
});
