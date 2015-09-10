import Ember from 'ember';

export default Ember.Controller.extend({

  bikeColumns: Ember.computed(function() {
    var col = Ember.A([
      Ember.Object.create({
        propertyName: 'name',
        title: 'Name'
      }),
      Ember.Object.create({
        propertyName: 'distance',
        title: 'Distance'
      }),
      Ember.Object.create({
        propertyName: 'principal',
         title: 'Primary'
      })
    ]);
    return col;
  }),

  bikeContent: Ember.computed(function() {
    return this.get("model").bikes;
  }),

  shoeColumns: Ember.computed(function() {
    var col = Ember.A([
      Ember.Object.create({
        propertyName: 'name',
        title: 'Name'
      }),
      Ember.Object.create({
        propertyName: 'distance',
        title: 'Distance'
      }),
      Ember.Object.create({
        propertyName: 'principal',
         title: 'Primary'
      })
    ]);
    return col;
  }),

  shoeContent: Ember.computed(function() {
    return this.get("model").shoes;
  })


});