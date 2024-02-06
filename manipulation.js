// $(document).ready(function(){
//     $("p").css("color","red");

// });
// $(document).ready(function(){
//     $("p").css({color:"red",backgroundColor:"black"});

// });
// $(document).ready(function(){
//    $("#para").css("color","red");
// });
$(document).ready(function(){
    $("#btn").click(function(){
        $("#para").css("color","red");
    });
   
 });
$(document).ready(function(){
    $("#btn").click(function(){
        $("#para").addClass("red");
    });
   
 });
$(document).ready(function(){
    $("#toggle").click(function(){
        $("#para").toggleClass("red");
    });
   
 });

 function valid() {
    var vehiclenameip = $('#id2').val();
    $("#op").text(vehiclenameip);
   
 };