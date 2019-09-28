AOS.init();


//lift-up

var $_ = {
    init: function () {
        this.liftUp();
    },

    liftUp: function () {
        $liftUp = $('.js-lift-up');

        $(window).scroll(function(){
            if ($(this).scrollTop() > 500) {
                $liftUp.addClass('_active');
            } else {
                $liftUp.removeClass('_active');
            }
        });

        $liftUp.click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    },

};

$(document).ready(function () {
    $_.init();
});

