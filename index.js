$(function(){
  $(".accordion__open").on("click",function(){
    $(this).toggleClass("active");
    $(this).next(".accordion__list").slideToggle();
  });
});