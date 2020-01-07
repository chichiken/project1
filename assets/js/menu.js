$(document).ready(function () {
    var $menuButUl = $('#creamNum1_content .menu_sub_inpo .inpo_efc2');
    var $menuButton = $('#creamNum1_content .menu_sub_inpo .inpo_efc li button');

    $menuButton.on('click', function () {
        if ($menuButUl.hasClass('on')) {//'on' 클래스를 가지고 있을 때(열림)
            $menuButUl.stop().slideUp().removeClass('on').parent().find($menuButton).text('안내사항');
        } else {
            $menuButUl.stop().slideDown().addClass('on').parent().find($menuButton).text('접기'); //'on' 클래스를 가지지 않을 때(닫힘)
        }
    });
});