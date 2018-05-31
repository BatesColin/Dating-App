$(document).ready(function() {
  $("#formOne").submit(function(event) {

  var gender = $("select#desiredGender").val();
  var ageRange = $("select#ageRange").val();
  var income = $("select#income").val();
  var hasKids = $("select#hasKids").val();

    //$(".dob").text(enterAge1);
if (gender === "male" && ageRange === "51+" && income === "100k+" && hasKids === "no"){
$("#krusty").show();
} if (gender === "male" && ageRange === "30-40" && income === "100k+" && hasKids === "yes"){
$("#rainier-wolfcastle").show();
} else if (gender === "male" && ageRange === "30-40" && income === "70-99k" && hasKids === "no"){
$("#Lenny-Leonard").show();
} else if (gender === "male" && ageRange === "41-50" && income === "40-69k" && hasKids === "yes"){
$("#Clancy-Wiggum").show();
} else if (gender === "male" && ageRange === "41-50" && income === "0-39k" && hasKids === "no"){
$("#Seymour-Skinner").show();
} else if (gender === "male" && ageRange === "30-40" && income === "100k+" && hasKids === "no"){
$("#Moe-Szyslak").show();
} else if (gender === "female" && ageRange === "18-29" && income === "100k+" && hasKids === "no"){
$("#Lurleen-Lumpkin").show();
} else if (gender === "female" && ageRange === "41-50" && income === "0-39k" && hasKids === "no"){
$("#Patty-Bouvier").show();
} else if (gender === "female" && ageRange === "30-40" && income === "0-39k" && hasKids === "no"){
$("#edna-krabappel").show();
} else {
  $("#ralph-wiggum").show();
  }


/*
if (gender === "" && ageRange === "" && income === "" && hasKids === ""){
$("#").show();
}
if (gender === "" && ageRange === "" && income === "" && hasKids === ""){
$("#").show();
}
if (gender === "" && ageRange === "" && income === "" && hasKids === ""){
$("#").show();
}
if (gender === "" && ageRange === "" && income === "" && hasKids === ""){
$("#").show();
}
*/

//$(".test").text(hasKids);


    event.preventDefault();
  });
});
