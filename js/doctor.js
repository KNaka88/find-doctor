var apiKey = require('./../.env').apiKey;

function Doctor () {
}

Doctor.prototype.getDoctors = function(query, callback){
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" +query+"&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key="+apiKey)
  .then(function(response) {

    var name = [];
    var description = [];
    var website = [];
    var city = [];
    var lat = [];
    var lon = [];
    var state = [];
    var street = [];
    var street2= [];
    var zip = [];
    var phone_number = [];
    var languages = [];
    var image_url = [];
    var bio = [];
    var specialities = [];
    var specialities_description = [];
    var resultArray = [];

    for(var i=0; i<response.data.length; i++){
      name.push(response.data[i].practices[0].name);
      description.push(response.data[i].practices[0].description);
      website.push(response.data[i].practices[0].website);
      city.push(response.data[i].practices[0].visit_address.city);
      lat.push(response.data[i].practices[0].visit_address.lat);
      lon.push(response.data[i].practices[0].visit_address.lon);
      state.push(response.data[i].practices[0].visit_address.state);
      street.push(response.data[i].practices[0].visit_address.street);
      street2.push(response.data[i].practices[0].visit_address.street2);
      zip.push(response.data[i].practices[0].visit_address.zip);
      phone_number.push(response.data[i].practices[0].phones[0].number);
      languages.push(response.data[i].practices[0].languages[0].name);
      image_url.push(response.data[i].profile.image_url);
      bio.push(response.data[i].profile.bio);
      specialities.push(response.data[i].specialties[0].name);
      specialities_description.push(response.data[i].specialties[0].description);

      var result = {
        name: name[i],
        description: description[i],
        website: website[i],
        city: city[i],
        lat: lat[i],
        lon: lon[i],
        state: state[i],
        street: street[i],
        street2: street2[i],
        zip: zip[i],
        phone_number: phone_number[i],
        languages: languages[i],
        image_url: image_url[i],
        bio: bio[i],
        specialities: specialities[i],
        specialities_description: specialities_description[i]
      };
      resultArray.push(result);
    }
    callback(resultArray);
  })

  .fail(function(error){
     console.log("fail");
   });
};

exports.doctorModule = Doctor;
