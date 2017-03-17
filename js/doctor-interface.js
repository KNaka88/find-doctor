var Doctor = require("./../js/doctor.js").doctorModule;
var apiKey = require('./../.env').apiKey;


$(function(){
  $("#search_form").submit(function(event){
    event.preventDefault();
    var query = $("#query").val();
    var newDoctor = new Doctor();
    newDoctor.getDoctors(query);
  });
});
