AOS.init();

//faq toggle stuff 
$('.toggle-link').click(function(e) {
    e.preventDefault();
    var notthis = $('.active').not(this);
    notthis.toggleClass('active').next('.toggle-image').slideToggle(300);
    $(this).toggleClass('active').next().slideToggle("fast");
});


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

