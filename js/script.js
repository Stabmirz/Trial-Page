AOS.init();

//toggle stuff 

$('.toggle-link').on('click', function() {
    $parent_box = $(this).closest('.toggle-data');
	$parent_box.siblings().find('.toggle-image').hide();
	$parent_box.find('.toggle-image').toggle();
    $("div.contact>img").addClass("hide-image");

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

