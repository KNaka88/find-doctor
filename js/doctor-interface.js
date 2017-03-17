var Doctor = require("./../js/doctor.js").doctorModule;



var displayResults = function(resultArray){

  for(var i=0; i<resultArray.length; i++){
    $("#result").append(
      "<div class='row'>" +
        "<div class='col-md-12'>" +
          "<h4>" + resultArray[i].name +"</h4>"+
        "</div>" +
        "<div class='col-md-4'>" +
          "<img src='"+ resultArray[i].image_url + "' alt='"+ resultArray[i].name +"'/>" +
          "<p>My Specialities: <span id='specialities'>"+ resultArray[i].specialities +"</span></p>" +
          "<p>I Speak: <span id='languages'>" +resultArray[i].languages + "</span></p>" +
        "</div>" +
        "<div class='col-md-8'>" +
          "<h3>Where I practice</h3>" +
          // <!-- googlemap -->
        "</div>" +
        "<div class='col-md-4'>" +
          "<h3>Contact Info</h3>" +
          "<p>Phone Number: <span id='phone_number'>"+ resultArray[i].phone_number +"</span></p>" +
          "<p>Website: <a id='website' href='"+resultArray[i].website+"'>"+ resultArray[i].website+"</a></p>" +
          "<p>Address:<br></p>" +
          "<p>" +
            "<span id='street'>"+resultArray[i].street+"</span><span id='street2'>"+ resultArray[i].street2+"</span>,&nbsp;<span id='state'>"+resultArray[i].state+"</span>,&nbsp;<span id='zip'>"+resultArray[i].zip+"</span>" +
          "</p>" +
        "</div>" +
        "<div class='col-md-8'>" +
          "<h3>Summary</h3>" +
          "<p id='description'>"+resultArray[i].description+"</p>" +
        "</div>" +
        "<div class='col-md-12'>" +
          "<h3>Bio</h3>" +
          "<p id='bio'>"+resultArray[i].bio+"</p>" +
        "</div>" +
      "</div> <!--end of row -->"
    );
  }

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
