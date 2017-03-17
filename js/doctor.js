
function Doctor () {

}

Doctor.prototype.getDoctors = function(query){
  console.log("GET DOCTORS");
};

exports.doctorModule = Doctor;
