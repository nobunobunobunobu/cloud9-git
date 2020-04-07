$(function(){
    $('#header-about').click(function(){
        $('#about-wrap').fadeIn();
    });
    $('#header-portfolio').click(function(){
        $('#Portfolio-wrap').fadeIn();
    });
    $('#header-contact').click(function(){
        $('#Contact-wrap').fadeIn();
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
    $('#button-space').click(function(){
      alert('PHPの勉強中のため現在使用できません。')
    });
});