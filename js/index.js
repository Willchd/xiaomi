//突出效果

$('.rt-box>li').mouseenter(function(){
    $(this).css('opacity',1).siblings().css('opacity',0.4)            
})
$(".wrap").mouseleave(function(){
    $('li').css('opacity',1)
})

//轮播图

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//选项卡滑动
$(".header-btm ul li").mouseenter(function(){
    
    $(".con").slideDown(500);
    
})

$(".con").mouseleave(function(){
    $(".con").slideUp(100)
})

$(".slide ul li").mouseenter(function(){
    $("#no").slideDown(500)
})

$("#no").mouseleave(function(){
    $("#no").slideUp(200)
})