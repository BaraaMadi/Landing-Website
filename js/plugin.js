$(document).ready(function(){
  $('.carousel').carousel({
     interval:6000  /* 6 min bettwen one slide to another*/
  });  
 
    //Show Color Option Div When Click On The Gear 
    $(".gear-check").click(function(){
       $(".color-option").fadeToggle(); 
    });
});
