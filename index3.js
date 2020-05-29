$(function() {
  $("#span").on("click",function(){
    $(".over-ray,.menu-bar,.span-nav").toggleClass("open");
  });
  $(".over-ray").on("click",function(){
    if($(".menu-bar").is(":visible")){
      $("#span").trigger("click");
    }else{
      event.stopPropagation();
    }
  });

});
