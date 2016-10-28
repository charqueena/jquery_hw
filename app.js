$(document).ready(function() {

  //Your code here

  //
  $("#change-red").on("click", function() {
    $("#make-red").css("background-color","red");
  });

  // .css ("width","500px")
  // .css("height", "500px")

  //chaining above, better to alter classes
  //alters in-line css of element

  $("#change-green").on("click", function() {
    $("#make-green").css("background-color","green");
  });


  $("#change-blue").on("click", function() {
    $("#make-blue").css("background-color","blue");
  });


  $("#make-big").on("click",function(){
    $("#bigger").addClass("big");
  });



  $("#make-small").on("click",function(){
    $("#smaller").addClass("small");
  });


  $("#animate-div").on("click", function() {

    $("#animated").css("background-color","blue");
    $("#animated").addClass("rotate");

  });


});
