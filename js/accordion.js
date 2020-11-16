$(function(){

    $('.exercise-level').on("click", function (){
        $(this).next().next().slideToggle();

    });

});