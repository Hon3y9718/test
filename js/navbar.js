//Selection Underline
$(function() {
  $("li").click(function() {
     // remove classes from all
     $("li").removeClass("active");
     // add class to the one we clicked
     $(this).addClass("active");
  });
});

//Toggle
$('.dropdown').click(function(){

  $('.dropdown-menu').toggleClass('show');

});
