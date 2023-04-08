$(function(){
    $('#scroll_bottom_map1').click(function(){
        $('html, body').animate({scrollTop: $(window).height() + 250}, 2000);
        return false;
    });
});

$(function(){
    $('#scroll_bottom_map2').click(function(){
        $('html, body').animate({scrollTop: $(window).height() + 250}, 2000);
        return false;
    });
});

$(function(){
    $('#scroll_bottom_about_project').click(function(){
        $('html, body').animate({scrollTop: 2*$(window).height() + 250}, 2000);
        return false;
    });
});

$(function(){
    $('#scroll_bottom_about_creators').click(function(){
        $('html, body').animate({scrollTop: 5*$(window).height() + 400}, 2000);
        return false;
    });
});


