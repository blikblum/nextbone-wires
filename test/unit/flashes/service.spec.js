describe('flashes/service', () => {
  beforeEach(function() {
    this.collection = { findWhere: stub(), add: stub() };
    this.collectionView = { collectionView: true };

    this.Collection = stub().returns(this.collection);
    this.CollectionView = stub().returns(this.collectionView);

    this.container = { show: stub() };

    this.service = proxyquire('../../src/flashes/service.js', {
      './collection': this.Collection,
      './collection-view': this.CollectionView,
    }).default;

    this.service.setup({
      container: this.container,
    });
    this.service.start();
  });

  describe('#setup', () => {
    it('should attach container', function() {
      expect(this.service).to.have.ownProperty('container', this.container);
    });
  });

  describe('#start', () => {
    it('should create a collection', function() {
      expect(this.Collection).to.have.been.calledWithNew;
      expect(this.service).to.have.property('collection', this.collection);
    });

    it('should create a CollectionView', function() {
      expect(this.CollectionView).to.have.been.calledWithNew.and.calledWith({
        collection: this.collection,
      });
    });

    it('should show the CollectionView', function() {
      expect(this.container.show).to.have.been.calledWith(this.collectionView);
    });
  });

  describe('#add', () => {
    beforeEach(function() {
      this.flash = { flash: true };
      this.service.add(this.flash);
    });

    it('should add the flash to the collection', function() {
      expect(this.collection.add).to.have.been.calledWith(this.flash);
    });
  });

  describe('#remove', () => {
    describe('when model exists', () => {
      beforeEach(function() {
        this.model = { destroy: stub() };
        this.collection.findWhere.returns(this.model);
        this.service.remove();
      });

      it('should destroy the model', function() {
        expect(this.model.destroy).to.have.been.called;
      });
    });

    describe('when model does not exist', () => {
      beforeEach(function() {
        spy(Backbone.Model.prototype, 'destroy');
        this.collection.findWhere.returns(undefined);
        this.service.remove();
      });

      it('should not destroy anything', () => {
        expect(Backbone.Model.prototype.destroy).not.to.have.been.called;
      });
    });
  });
});
