$(document).ready(function () {
    var timer = 0;
    var scrollT;

    $(window).on('scroll', function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            scrollT = $(this).scrollTop();
            var winBtm = scrollT + $(this).height();

            $('.fade').each(function () {
                var fadeBtm = $(this).offset().top + $(this).outerHeight();
                if (winBtm > fadeBtm) $(this).addClass('on');
                else $(this).removeClass('on');
            });
        }, 50);
    });

    //navigator
    var $gnb = $('#gnb');

    $('.btn_menu').on('click', function () {
        if ($(this).hasClass('active')) { //active 클래스를 가지고 있을 때(열려진 경우) 닫아주기
            $gnb.stop().animate({left: -234}, function () {
                $(this).css({visibility: 'hidden'});
                $('#dim').stop().fadeOut();
            });
            $(this).removeClass('active').find('.sr-only').text('메뉴 열기');

        } else { //active 클래스를 가지고 있지 않을 때(닫힌 경우) 열어주기
            $gnb.css({visibility: 'visible'}).stop().animate({left: 0}, 300);
            $('#dim').stop().fadeIn();

            var $first = $gnb.find('[data-link="first"]');
            var $last = $gnb.find('[data-link="last"]');

            $first.focus();
            $(this).addClass('active').find('.sr-only').text('메뉴 닫기');
        }
    });

    $gnb.find('.gnb_menu > li > a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle().parent().toggleClass('on');
    });
});