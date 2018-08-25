$(function(){
    //pop移动到
    $(".tree-move li>a").click(function(){
        $(this).parent('li').addClass('cur').siblings().removeClass('cur');
    })
    //tab
    $(".pop-content").find(".pop-content-main:eq(0)").show();
    $(".pop-tab").find('.item').click(function(){
        var _index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $(this).parent('.pop-tab').siblings('.pop-content').find('.pop-content-main').eq(_index).show().siblings().hide();
        
    })



})
