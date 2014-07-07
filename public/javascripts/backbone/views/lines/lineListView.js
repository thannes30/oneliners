var oneLinerApp = oneLinerApp || { Models: {}, Collections: {}, Views: {} };

oneLinerApp.Views.LinerListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'all', this.render)
  },

  render: function(){
    var that = this;
    this.$el.empty();
    _.each(this.collection.models, function(liner){
      var linerView = oneLinerApp.Views.LinerView({model: liner});
      that.$el.append( linerView.render().el );
    })
    return this;
  }
})
