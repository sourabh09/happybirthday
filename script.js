$( document ).ready(function() {
  $('a.toggle').on('click', function() {
  $('section').scrollTop(0);
  $('.contain').toggleClass('active');
  return false;
})

$('section').on('click', function() {
  //  $(this).closest('section').prependTo('.contain');
  $('section').removeClass('active');
  $(this).addClass('active');
  $('.contain').removeClass('active');
})
});

function play(){

     $(".play").addClass("hide");
      $(".heading").fadeIn(6000);
    $(".plate").addClass("appear");
    $(".base-l").addClass("appear");
    $(".base-i").addClass("appear");
    $(".mid-l").addClass("appear");
    $(".mid-i").addClass("appear");
    $(".top-l").addClass("appear");
    $(".top-i").addClass("appear");
    $(".icing-tip").addClass("appear");
    $(".top-i-1").addClass("pourdown1");
    $(".top-i-2").addClass("pourdown2");
    $(".top-i-3").addClass("pourdown3");
    $(".top-i-4").addClass("pourdown4");
    $(".top-i-5").addClass("pourdown5");
    $(".top-i-6").addClass("pourdown6");
    $(".top-i-7").addClass("pourdown7");
    $(".top-i-8").addClass("pourdown8");
    $(".top-i-9").addClass("pourdown9");
    $(".candle").addClass("appear");

}

/*function songplay(){

   var audio = document.getElementById("audio");
   audio.play();

}*/