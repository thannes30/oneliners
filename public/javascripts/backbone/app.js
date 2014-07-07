var oneLinerApp = oneLinerApp || { Models: {}, Collections: {}, Views: {} };

oneLinerApp.initialize = function(){

  var liners = new oneLinerApp.Collections.LinersCollection();

  var listView = new oneLinerApp.Views.LinersListView({
    collection: liners,
    el: $('.liners')
  })

  liners.fetch();

  //create a oneliner
  $('form.liner-form').on('submit', function(e){
    e.preventDefault();
    var linerField = $('form.liner-form input');
    var newLiner = linerField.val();
    linerField.val('');
    liners.create({liner: newLiner})
  })

}

//on load
$(function(){
  oneLinerApp.initialize();
})
