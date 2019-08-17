$(document).ready(function () {
    $(".card-content a").click(function () {
        $(this).removeClass('pulse');
    });

    intro();

    $("#e1-1").click(function () {
        setTimeout(function () {
            slide1_1()
        }, 100);
    });

    $("#e1-2").click(function () {
        setTimeout(function () {
            slide1_2()
        }, 100);
    });
});


function intro() {
    setTimeout(function () {
        $("#sections").removeClass('animated');
        $(".circulo").removeClass('hide').addClass('fadeIn');
        setTimeout(function () {
            $("#logo").removeClass('hide').addClass('slideInDown');

            $("#txt-intro").removeClass('hide').addClass('fadeInUp');
            setTimeout(function () {
                $(".rows").removeClass('hide').addClass('fadeLeft');
                setTimeout(function () {
                    $(".numbers").removeClass('hide').addClass('fadeIn');
                    setTimeout(function () {
                        $(".enlaces a:nth-child(1)").removeClass('hide').addClass('slideInRight');
                        setTimeout(function () {
                            $(".enlaces a:nth-child(2)").removeClass('hide').addClass('slideInRight');
                        }, 200);
                    }, 800);
                }, 800);
            }, 800);
        }, 600);
    }, 3000);
}

function slide1_1() {
    setTimeout(function () {
        $("#ttl-1-1-1").removeClass('hide').addClass('zoomIn');
        $("#ttl-1-1-2").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card1-1-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card1-1-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $("#card1-1-3").removeClass('hide').addClass('slideInUp');
                    setTimeout(function () {
                        $("#card1-1-4").removeClass('hide').addClass('slideInUp');
                        setTimeout(function () {
                            $("#card1-1-5").removeClass('hide').addClass('slideInUp');
                            setTimeout(function () {
                                $(".card-content a").removeClass('hide').addClass('zoomIn');
                                setTimeout(function () {
                                    $(".card-content a").addClass('pulse');
                                }, 1200);
                            }, 1000);
                        }, 400);
                    }, 400);
                }, 400);
            }, 400);
        }, 4200);
    }, 200);
}

function slide1_2() {
    setTimeout(function () {
        $("#ttl-1-2-2").removeClass('hide').addClass('zoomIn');
        $("#ttl-1-2-1").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card1-2-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card1-2-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $("#card1-2-3").removeClass('hide').addClass('slideInUp');
                    setTimeout(function () {
                        $("#card1-2-4").removeClass('hide').addClass('slideInUp');
                        setTimeout(function () {
                            $(".card-content a").removeClass('hide').addClass('zoomIn');
                            setTimeout(function () {
                                $(".card-content a").addClass('pulse');
                            }, 1200);
                        }, 1000);
                    }, 400);
                }, 400);
            }, 400);
        }, 2000);
    }, 200);
}