$(document).ready(function (){

    $("#text").hide();

    $("#btn").click(function(){
        $("#text").show();
    });
    $("#btn2").click(function(){
        $("#text").hide();
        $("#btn").hide()
    });
});