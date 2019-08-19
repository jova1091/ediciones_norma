$(document).ready(function () {
    // Inicializa modales
    //***********************************************************
    $('.modal').modal({
        preventScrolling: true,
        onOpenEnd: function(){
            alto = $(".modal").height();
            $(".video-responsive").css('height', alto);
        }
    });
    
    
    // Inicializa slider
    //***********************************************************
    $('.slider').slider({
        interval: 10000
    });

    // Funcion general para quitar la animación pulse en 
    // los botones de las card
    //***********************************************************
    $(".card-content a").click(function () {
        $(this).removeClass('pulse');
    });

    // Llamado a la funcion para hacer la animación de intro
    //***********************************************************
    intro();

    // Llamado a la funcion de navegación flecha arriba
    //***********************************************************
    $("#rowUp").click(function () {
        rowUp();
    });

    // Llamado a la funcion de navegación flecha abajo
    //***********************************************************
    $("#rowDown").click(function () {
        rowDown();
    });

    // Llamado a la función del enlace 1 de seccion 1
    //***********************************************************
    $("#e1-1").click(function () {
        setTimeout(function () {
            slide1_1()
        }, 100);
    });

    // Llamado a la función del enlace 2 de seccion 1
    //***********************************************************
    $("#e1-2").click(function () {
        setTimeout(function () {
            slide1_2()
        }, 100);
    });
    
    // Llamado a la función del enlace 1 de seccion 2
    //***********************************************************
    $("#e2-1").click(function () {
        setTimeout(function () {
            slide2_1()
        }, 100);
    });
    
    // Llamado a la función del enlace 3 de seccion 2
    //***********************************************************
    $("#e2-3").click(function () {
        setTimeout(function () {
            slide2_3()
        }, 100);
    });

    // Llamado a la función del enlace 1 de seccion 3
    //***********************************************************
    $("#e3-1").click(function () {
        setTimeout(function () {
            slide3_1()
        }, 100);
    });
    
    // Llamado a la función del enlace 2 de seccion 3
    //***********************************************************
    $("#e3-2").click(function () {
        setTimeout(function () {
            slide3_2()
        }, 100);
    });
    
    // Llamado a la función del enlace 1 de seccion 4
    //***********************************************************
    $("#e4-1").click(function () {
        setTimeout(function () {
            slide4_1()
        }, 100);
    });

    // Llamado a la función del enlace 1 de seccion 5
    //***********************************************************
    $("#e5-1").click(function () {
        setTimeout(function () {
            slide5_1()
        }, 100);
    });

    // Llamado a la función del enlace 1 de seccion 6
    //***********************************************************
    $("#e6-1").click(function () {
        setTimeout(function () {
            slide6_1()
        }, 100);
    });

    // Llamado a la función del enlace 1 de seccion 7
    //***********************************************************
    $("#e7-1").click(function () {
        setTimeout(function () {
            slide7_1()
        }, 100);
    });

    // Funcion que pausa video en modal
    //***********************************************************
    $("#closeMdl2-1").click(function(){
        pauseVideo('#modal2-1')
    });

    // Funcion que pausa video en modal
    //***********************************************************
    $("#closeMdl2-2").click(function(){
        pauseVideo('#modal2-2')
    });

    $("#item-1").click(function(){
        reset();

        $(this).addClass('active');
        $("#item-1 img").attr('src','img/boton1hv.png').addClass('pulse');

        $(".grouper").attr('style','margin-left: 12px !important; width: 58.4%;');
        $(".grouper .selector").css('margin-left','12%');

        for(let cont = 0; cont <= 7; cont ++ ){
            $(".selectable div:nth-child("+ cont +")").addClass('selected');
        }
    });

    $("#item-2").click(function(){
        reset();

        $(this).addClass('active');
        $("#item-2 img").attr('src','img/boton2hv.png').addClass('pulse');

        $(".grouper").attr('style','margin-left: 12px !important; width: 91.7%;');
        $(".grouper .selector").css('margin-left','38%');

        for(let cont = 0; cont <= 11; cont ++ ){
            $(".selectable div:nth-child("+ cont +")").addClass('selected');
        }
    });

    $("#item-3").click(function(){
        reset();

        $(this).addClass('active');
        $("#item-3 img").attr('src','img/boton3hv.png').addClass('pulse');

        $(".grouper").attr('style','margin-left: 50.7% !important; width: 25.2%;');
        $(".grouper .selector").css('margin-left','14%');
        for(let cont = 7; cont <= 9; cont ++ ){
            $(".selectable div:nth-child("+ cont +")").addClass('selected');
        }

    });

    $("#item-4").click(function(){
        reset();

        $(this).addClass('active');
        $("#item-4 img").attr('src','img/boton4hv.png').addClass('pulse');

        $(".grouper").attr('style','margin-left: 12px !important; width: 100%;');
        $(".grouper .selector").css('margin-left','85%');
        for(let cont = 0; cont <= 12; cont ++ ){
            $(".selectable div:nth-child("+ cont +")").addClass('selected');
        }
    });

});


// Funcion que resetea elementos en slide 1 de sección 6
//***********************************************************
function reset(){
    $(".menu div").each(function () {
        $(this).removeClass('active');
    });

    $(".menu div img").each(function () {
        $(this).removeClass('pulse');
    });

    $(".selectable div").each(function () {
        $(this).removeClass('selected');
    });

    $("#item-1 img").attr('src','img/boton1.png');
    $("#item-2 img").attr('src','img/boton2.png');
    $("#item-3 img").attr('src','img/boton3.png');
    $("#item-4 img").attr('src','img/boton4.png');
}

// Funcion que pausa video en modal
//***********************************************************
function pauseVideo(idModal) {
    $(idModal + ' video').get(0).pause();
}

// Funcion menu de navegación flecha arriba
//***********************************************************
function rowUp() {
    let contador = $('#contador').text();
    contador = parseInt(contador) + 1;
    if (contador <= 7) {
        $('#contador').text(contador);
        validator(contador);
    } else {
        contador = 1;
        $('#contador').text(contador);
        validator(contador);
    }
}

// Funcion menu de navegación flecha abajo
//***********************************************************
function rowDown() {
    let contador = $('#contador').text();
    contador = parseInt(contador) - 1;
    if (contador >= 1) {
        $('#contador').text(contador);
        validator(contador);
    } else {
        contador = 7;
        $('#contador').text(contador);
        validator(contador);
    }
}

// Identifica opcion de menu, resetea textos y enlaces
// Cambia color de circulo, muestra texto y enlaces que 
// corresponden a opcion del menu
//***********************************************************
function validator(val) {
    switch (val) {
        case 1: {
            resetText();
            $("#txt-1").removeClass('hide').addClass('zoomIn');
            resetEnlaces();
            rotateCircle('0');
            circulo('azul');
            $("#e1-1").removeClass('hide').addClass('slideInRight');
            $("#e1-2").removeClass('hide').addClass('slideInRight');
        }
        break;
    case 2: {
        resetText();
        $("#txt-2").removeClass('hide').addClass('zoomIn');
        resetEnlaces();
        rotateCircle('51');
        circulo('lila');
        $("#e2-1").removeClass('hide').addClass('slideInRight');
        $("#e2-2").removeClass('hide').addClass('slideInRight');
        $("#e2-3").removeClass('hide').addClass('slideInRight');
    }
    break;
    case 3: {
        resetText();
        $("#txt-3").removeClass('hide').addClass('zoomIn');
        resetEnlaces();
        rotateCircle('103');
        circulo('aqua');
        $("#e3-1").removeClass('hide').addClass('slideInRight');
        $("#e3-2").removeClass('hide').addClass('slideInRight');
    }
    break;
    case 4: {
        resetText();
        $("#txt-4").removeClass('hide').addClass('zoomIn');
        resetEnlaces();
        rotateCircle('153');
        circulo('morado');
        $("#e4-1").removeClass('hide').addClass('slideInRight');
    }
    break;
    case 5: {
        resetText();
        $("#txt-5").removeClass('hide').addClass('zoomIn');
        resetEnlaces();
        rotateCircle('205');
        circulo('amarillo');
        $("#e5-1").removeClass('hide').addClass('slideInRight');
    }
    break;
    case 6: {
        resetText();
        $("#txt-6").removeClass('hide').addClass('zoomIn');
        resetEnlaces();
        rotateCircle('258');
        circulo('verde');
        $("#e6-1").removeClass('hide').addClass('slideInRight');
    }
    break;
    case 7: {
        resetText();
        $("#txt-7").removeClass('hide').addClass('zoomIn');
        resetEnlaces();
        rotateCircle('310');
        circulo('fucsia');
        $("#e7-1").removeClass('hide').addClass('slideInRight');
    }
    break;
    }
}

// Funcion para remover color de circulo
//***********************************************************
function circulo(color) {
    $(".circulo").removeClass('azul morado aqua amarillo lila fucsia verde');
    $(".circulo").addClass(color)
}

// Funcion para rotar el circulo
//***********************************************************
function rotateCircle(grados) {
    $('#sections').css('transform', 'rotate(' + grados + 'deg)');
}

// Funcion para inicializar textos del circulo
//***********************************************************
function resetText() {
    $(".textos").each(function () {
        $(this).removeClass('zoomIn').addClass('hide');
    });
}

// Funcion para inicializar enlaces
//***********************************************************
function resetEnlaces() {
    $(".enlace").each(function () {
        $(this).removeClass('slideInRight').addClass('hide');
    });
}

// Funcion de animación para el intro
//***********************************************************
function intro() {
    setTimeout(function () {
        $("#sections").removeClass('rotateIn infinite');
        $(".circulo").removeClass('hide').addClass('fadeIn');
        setTimeout(function () {
            $("#logo").removeClass('hide').addClass('slideInDown');
            $("#txt-intro").removeClass('hide').addClass('fadeInUp');
            setTimeout(function () {
                $(".rows").removeClass('hide').addClass('fadeLeft');
                setTimeout(function () {
                    $(".numbers").removeClass('hide').addClass('fadeIn');
                    setTimeout(function () {
                        $("#logo").removeClass('slideInDown').addClass('zoomOut').addClass('hide');
                        $("#txt-intro").removeClass('fadeInUp').addClass('zoomOut').addClass('hide');
                        setTimeout(function () {
                            $("#txt-1").removeClass('hide').addClass('zoomIn');
                            setTimeout(function () {
                                $(".enlaces a:nth-child(1)").removeClass('hide').addClass('slideInRight');
                                setTimeout(function () {
                                    $(".enlaces a:nth-child(2)").removeClass('hide').addClass('slideInRight');
                                }, 150);
                            }, 800);
                        }, 800);
                    }, 800);
                }, 800);
            }, 2000);
        }, 600);
    }, 3000);
}

// Funcion de animación para enlace 1 de seccion 1
//***********************************************************
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

// Funcion de animación para enlace 2 de seccion 1
//***********************************************************
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

// Funcion de animación para enlace 1 de seccion 2
//***********************************************************
function slide2_1() {
    setTimeout(function () {
        $("#ttl2-1-2").removeClass('hide').addClass('zoomIn');
        $("#ttl2-1-1").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card2-1-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card2-1-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $(".card-content a").removeClass('hide').addClass('zoomIn');
                    setTimeout(function () {
                        $(".card-content a").addClass('pulse');
                    }, 1200);
                }, 1000);
            }, 400);
        }, 2000);
    }, 200);
}

// Funcion de animación para enlace 3 de seccion 2
//***********************************************************
function slide2_3() {
    setTimeout(function () {
        $("#ttl2-3-1").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $(".elem1").removeClass('hide').addClass('zoomIn');
            setTimeout(function () {
                $(".elem2").removeClass('hide').addClass('zoomIn');
                setTimeout(function () {
                    $(".elem3").removeClass('hide').addClass('zoomIn');
                    setTimeout(function () {
                        $(".elem4").removeClass('hide').addClass('zoomIn');
                        setTimeout(function () {
                            $(".elem5").removeClass('hide').addClass('zoomIn');
                        }, 1100);
                    }, 1100);
                }, 1100);
            }, 1100);
        }, 1100);
    }, 200);
}

// Funcion de animación para enlace 1 de seccion 3
//***********************************************************
function slide3_1() {
    setTimeout(function () {
        $("#ttl3-1-1").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card3-1-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card3-1-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $(".card-content a").removeClass('hide').addClass('zoomIn');
                    setTimeout(function () {
                        $(".card-content a").addClass('pulse');
                    }, 1200);
                }, 1000);
            }, 400);
        }, 2000);
    }, 200);
}

// Funcion de animación para enlace 2 de seccion 3
//***********************************************************
function slide3_2() {
    setTimeout(function () {
        $("#ttl-3-2-2").removeClass('hide').addClass('zoomIn');
        $("#ttl-3-2-1").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card3-2-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card3-2-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $("#card3-2-3").removeClass('hide').addClass('slideInUp');
                    setTimeout(function () {
                        $("#card3-2-4").removeClass('hide').addClass('slideInUp');
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

// Funcion de animación para enlace 1 de seccion 4
//***********************************************************
function slide4_1() {
    setTimeout(function () {
        $("#ttl-4-1-1").removeClass('hide').addClass('zoomIn');
        $("#ttl-4-1-2").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card4-1-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card4-1-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $("#card4-1-3").removeClass('hide').addClass('slideInUp');
                        setTimeout(function () {
                            $(".card-content a").removeClass('hide').addClass('zoomIn');
                            setTimeout(function () {
                                $(".card-content a").addClass('pulse');
                            }, 1200);
                        }, 1000);
                }, 400);
            }, 400);
        }, 2000);
    }, 200);
}

// Funcion de animación para enlace 1 de seccion 5
//***********************************************************
function slide5_1() {
    setTimeout(function () {
        $("#ttl-5-1-1").removeClass('hide').addClass('zoomIn');
        $("#ttl-5-1-2").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card5-1-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card5-1-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $("#card5-1-3").removeClass('hide').addClass('slideInUp');
                        setTimeout(function () {
                            $(".card-content a").removeClass('hide').addClass('zoomIn');
                            setTimeout(function () {
                                $(".card-content a").addClass('pulse');
                            }, 1200);
                        }, 1000);
                }, 400);
            }, 400);
        }, 2000);
    }, 200);
}

// Funcion de animación para enlace 1 de seccion 6
//***********************************************************
function slide6_1() {
    setTimeout(function () {
        $("#ttl-6-1-1").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $(".menu div").removeClass('hide').addClass('zoomIn');
            setTimeout(function () {
                $(".grouper").removeClass('hide').addClass('zoomIn');
                $(".selectable").removeClass('hide').addClass('zoomIn');
            }, 1200);
        }, 2000);
    }, 200);
}

// Funcion de animación para enlace 1 de seccion 7
//***********************************************************
function slide7_1() {
    setTimeout(function () {
        $("#ttl-7-1-1").removeClass('hide').addClass('zoomIn');
        $("#ttl-7-1-2").removeClass('hide').addClass('zoomIn');
        setTimeout(function () {
            $("#card7-1-1").removeClass('hide').addClass('slideInUp');
            setTimeout(function () {
                $("#card7-1-2").removeClass('hide').addClass('slideInUp');
                setTimeout(function () {
                    $("#card7-1-3").removeClass('hide').addClass('slideInUp');
                        setTimeout(function () {
                            $(".card-content a").removeClass('hide').addClass('zoomIn');
                            setTimeout(function () {
                                $(".card-content a").addClass('pulse');
                            }, 1200);
                        }, 1000);
                }, 400);
            }, 400);
        }, 2000);
    }, 200);
}