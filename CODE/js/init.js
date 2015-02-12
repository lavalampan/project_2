$(document).ready(function () {

    //Show hide Divs Functions
    $("#toggleMarket").click(function () {
        $("#market").slideToggle("slow");

        if ($("#market").is(':visible')) {
            $("html, body").animate({
                scrollTop: $("#market").offset().top - top_ofset
            }, 1500);
        }
    });

    $("#toggleTech").click(function () {
        $("#teknik").slideToggle("slow");

        if ($("#teknik").is(':visible')) {
            $("html, body").animate({
                scrollTop: $("#teknik").offset().top - top_ofset
            }, 1500);
        }
    });

    //header links
    $('header nav a').click(function () {
        $(this).parent().siblings().find('.active').removeClass('active');
        $(this).addClass('active');
    });

    //start slider depending of resolution
    var width_page = $(document).width();


    if (width_page > 540 && width_page <= 649) {
        $('.slider1').bxSlider({
            slideWidth: 200,
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            slideMargin: 0
        });
    }

    if (width_page >= 650 && width_page <= 959) {
        $('.slider1').bxSlider({
            slideWidth: 190,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 0
        });
        $('.slider2').bxSlider({
            slideWidth: 226,
            minSlides: 1,
            maxSlides: 2,
            moveSlides: 1,
            slideMargin: 60,
            infiniteLoop: false
        });
    }

    if (width_page >= 960) {
        $('.slider1').bxSlider({
            slideWidth: 190,
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1,
            slideMargin: 0
        });
        $('.slider2').bxSlider({
            slideWidth: 226,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 60,
            moveSlides: 1,
            infiniteLoop: false
        });
    }


    var top_ofset = $('header').height() - 1;


    $('header li a, .logo, .down, .subheader .btn, footer .container > a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - top_ofset
        }, 1000);

    });

    //Scroll up - button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#to_the_top').fadeIn();
        } else {
            $('#to_the_top').fadeOut();
        }
    });
    $('#to_the_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        $(this).fadeOut(500);
        return false;
    });

    //Scroll down - button
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 200
        }, 600);

    });

    //validate contact form
    $("form.contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            comments: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: false,
                number: true
            }
        },
        messages: {
            name: {
                required: "This field is required",
                minlength: jQuery.format("At least {0} characters required")
            },
            comments: {
                required: "This field is required",
                minlength: jQuery.format("At least {0} characters required")
            },
            email: {
                required: "This field is required",
                email: "Wrong e-mail address"
            }
        },
        errorClass: "error"
    });

});




//PLACEHOLDER
$('[placeholder]').focus(function () {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
    }
}).blur(function () {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
    }
}).blur().parents('form').submit(function () {
    $(this).find('[placeholder]').each(function () {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
        }
    })
});


// map

var styles = []

var styledMap = new google.maps.StyledMapType(styles, {
    name: "Styled Map"
})

var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(58.392251, 15.559177),
    scrollwheel: false,

    // disable mapType-top_right corner
    mapTypeControl: false,
    disableDefaultUI: false,
    draggable: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map']
    }
};
var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(58.394251, 15.559186),
    map: map,
    icon: 'images/marker.png' // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
});



map.mapTypes.set('map', styledMap);
map.setMapTypeId('map');