var apiKey = require('./../.env').apiKey;


$(function(){
  $("#search_form").submit(function(event){
    event.preventDefault();
    let query = $("#query").val();
    console.log(query);
  });

});
