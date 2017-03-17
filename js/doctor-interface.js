var Doctor = require("./../js/doctor.js").doctorModule;



var displayResults = function(resultArray){
  console.log(resultArray);

};



$(function(){
  $("#search_form").submit(function(event){
    event.preventDefault();
    var query = $("#query").val();
    var newDoctor = new Doctor();
    newDoctor.getDoctors(query, displayResults);
    // newDoctor.getDoctors(query, displayResults);
  });
});
