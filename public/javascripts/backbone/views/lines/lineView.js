var oneLinerApp = oneLinerApp || { Models: {}, Collections: {}, Views: {} };

oneLinerApp.Views.LinerView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'all', this.render);
  },
  tagName: 'li',
  template: _.template($('#liner-template').html()),
  editTemplate: _.template($('#edit-liner-template').html()),
  render: function(){
    this.$el.html( this.template( this.model.attributes ));
    return this;
  },
  events:{
    'click'
  }
})
