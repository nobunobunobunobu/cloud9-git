$(function(){
    $('#header-about').click(function(){
        $('#about-wrap').fadeIn();
    });
    $('#header-portfolio').click(function(){
        $('#Portfolio-wrap').fadeIn();
    });
    $('#header-contact').click(function(){
        alert('作成中!');
    });
    $('.header-item').hover(function() {
      $(this).stop().animate({zIndex:1},{
        duration:1000,
        step:function(now){
          $(this).css({transform:'rotateY(' + (now * 1080) + 'deg)'});
        },
        complete:function(){
          $(this).css('zIndex', 0);
        }
      })
    },function() {
       $(this).css({transform:'rotateY(0deg)'});
    });
});