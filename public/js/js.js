
  /*-----------注册界面提醒-----------*/
$(function(){
    $(".spsearch span").hide();
$("input.spnormal").focus(function(){

    $(this).next().show();
});
$(".spnormal").blur(function(){
    // console.log("k");
    $(this).next().hide();
});
});

    /*-----------注册界面提醒end-----------*/
