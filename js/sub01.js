$(document).ready(function(){ // 실행틀 시작

  AOS.init();

  $(".page2, .page3").hide();

  $(".bt1").click(function(){
    $(".page2, .page3").hide();
    $(".page1").show();
  });

  $(".bt2").click(function(){
    $(".page1, .page3").hide();
    $(".page2").show();
  });

  $(".bt3").click(function(){
    $(".page1, .page2").hide();
    $(".page3").show();
  });

  $(".home").click(function(){
    $(".page1, .page2").hide();
    $(".page3").show();
  });





}); // 실행틀