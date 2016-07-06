$(document).ready(function() {

    $(".dropdown")
    .dropdown();

    $('.ui.checkbox')
    .checkbox();

    $('.ui.radio.checkbox')
    .checkbox();

    $("a").on("click", function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 600, function() {
                window.location.hash = hash;
            })
        }
    });

    scaleVideoContainer();

    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');

    });

    function scaleVideoContainer() {

        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height',unitHeight);

    }

    function initBannerVideoSize(element){

        $(element).each(function(){
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element){

        var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

        console.log(windowHeight);

        $(element).each(function(){
            var videoAspectRatio = $(this).data('height')/$(this).data('width');

            $(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }

    $('.audio').prop("volume", 0.02);
    $(".regular").slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});

function updateForm() {
    var raw = $('form').serializeArray();
    var data = [];
    for(var key in raw) {
        if (raw[key]["value"] !== "") {
            data.push(raw[key]["value"]);
        }
    }
    console.log(data);
}


function showModal() {
    $(".ui.modal").modal({blurring: true}).modal('show');
}
