var Doctor = require("./../js/doctor.js").doctorModule;
var googleApiKey = require('./../.env').googleApiKey;


var displayResults = function(resultArray){
  $("#result").show();
  if(resultArray[0] === undefined){
    $("#result").append("<h2>No Result</h2>");
  }else{
    for(var i=0; i<resultArray.length; i++){

      if(resultArray[i].website === "no data"){
        resultArray[i].website = "";
      } 

      $("#result").append(
        "<div class='show_doctor'>" +
        "<div class='row'>" +
        "<div class='col-md-6 image'>" +
        "<h2>" + resultArray[i].name +"</h2>"+
        "<img src='"+ resultArray[i].image_url + "' alt='"+ resultArray[i].name +"'/>" +
        "<p>My Specialities: <span id='specialities'>"+ resultArray[i].specialities +"</span></p>" +
        "<p>I Speak: <span id='languages'>" +resultArray[i].languages + "</span></p>" +
        "</div>" +
        "<div class='col-md-6 contact'>" +
        "<h3>Contact Info</h3>" +
        "<p>Phone Number: <span id='phone_number'>"+ resultArray[i].phone_number +"</span></p>" +
        "<p>Website: <a id='website' href='"+resultArray[i].website+"'>"+ resultArray[i].website+"</a></p>" +
        "<p>Address:<br></p>" +
        "<p>" +
        "<span id='street'>"+resultArray[i].street+"</span><span id='street2'>"+ resultArray[i].street2+"</span>,&nbsp;<span id='state'>"+resultArray[i].state+"</span>,&nbsp;<span id='zip'>"+resultArray[i].zip+"</span>" +
        "</p>" +
        "<button type='button class='location_button'>See Location</button>" +
        "</div>" +
        "<div class='col-md-12 summary'>" +
        "<h3>Summary</h3>" +
        "<p id='description'>"+resultArray[i].description+"</p>" +
        "</div>" +
        "<div class='col-md-12 bio'>" +
        "<h3>Bio</h3>" +
        "<p id='bio'>"+resultArray[i].bio+"</p>" +
        "</div>" +
        "</div> <!--end of row -->" +
        "<p class='lat'>"+resultArray[i].lat+"</p>" +
        "<p class='lon'>"+resultArray[i].lon+"</p>" +
        "</div>"
      );
    }
  }
};



$(function(){
  $("#search_form").submit(function(event){
    event.preventDefault();
    var query = $("#query").val();
    var newDoctor = new Doctor();
    newDoctor.getDoctors(query, displayResults);
  });
});
