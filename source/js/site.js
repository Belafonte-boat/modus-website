
//= require "vendor/jquery.autosize"
//= require "vendor/jquery.isotope.min"
//= require "vendor/lightbox-2.6.min"
//= require "vendor/jquery.bxslider"
//= require "vendor/jquery.validate"
//= require "vendor/jquery.parallax-1.1.3"
//= require "vendor/init"
//= require "vendor/bootstrap"
//= require "vendor/jquery.bttrlazyloading.js"
//= require "ajaxchimp/jquery.ajaxchimp"
//= require "ajaxchimp/jquery.ajaxchimp.langs"
//= require "vendor/jquery-timing.min"


var addresses = new Array();
var geocoder;
var map;
var infowindow = null;
var geocoder = new google.maps.Geocoder();
var places= {
    "points": [
        {
            "phone": "0175\/42827",
            "opening": "Luned\u00ec: 15.30-19.30, dal marted\u00ec al venerd\u00ec:9.00-12.30\/15.00-19.30",
            "name": "SALUZZO",
            "address": "SALUZZO \u2013 CORSO PIEMONTE, 54   - 12037",
            "B": "7.4871038999999655",
            "K": "44.6467574"
        },
        {
            "phone": "0172\/31707",
            "opening": "Luned\u00ec:15.30-19.30; marted\u00ec: 8.30-12.30\/15.30-19.30; dal mercoled\u00ec al sabato: 9.00-12.30\/15.30-19.30",
            "name": "SAVIGLIANO",
            "address": "SAVIGLIANO - VIA SAVIO,13-12038",
            "B": "7.652514800000063",
            "K": "44.6473906"
        },
        {
            "phone": "0171\/693633",
            "opening": "Luned\u00ec:9.30-12.30\/15.00-19.30; dal Marted\u00ec al Sabato:9.00-19.30; Domenica:16.00-19.30",
            "name": "CUNEO BIG",
            "address": "CUNEO-CORSO NIZZA,16-12100",
            "B": "7.545613900000035",
            "K": "44.3874168"
        },
        {
            "phone": "0171697281",
            "opening": "Luned\u00ec:9.30-12.30\/15.30-19.30;Marted\u00ec:8.30-12.30\/15.00-19.30;dal Mercoled\u00ec al Sabato:9.00-12.30\/15.00-19.30",
            "name": "CUNEO OLD",
            "address": "CUNEO-VIA XX SETTEMBRE,43-12100",
            "B": "7.540841900000032",
            "K": "44.3847643"
        },
        {
            "phone": "0172\/637206",
            "opening": "Luned\u00ec:15.30-19.30;Marted\u00ec:9.00-12.30\/15.30-19.30;Mercoled\u00ec:8.30-12.30\/15.30-19.30;dal Gioved\u00ec al Sabato:9.00-12.30\/15.30-19.30",
            "name": "FOSSANO",
            "address": "FOSSANO-VIA ROMA,154-12045",
            "B": "7.724993300000051",
            "K": "44.5476743"
        },
        {
            "phone": "0173\/285438",
            "opening": "Luned\u00ec:15.30-19.30;dal Marted\u00ec al Sabato:9.00-12.30\/15.00-19.30",
            "name": "ALBA PIAVE",
            "address": "ALBA-CORSO PIAVE,16\/D-12051",
            "B": "8.0270716",
            "K": "44.6924438"
        },
        {
            "phone": "0173\/440489",
            "opening": "Luned\u00ec:15.30-19.30;dal Marted\u00ec al Sabato:9.00-19.30;Domenica:15.30-19.30",
            "name": "ALBA VITTORIO",
            "address": "ALBA-VIA VITTORIO EMANUELE,21-12051",
            "B": "8.034533699999997",
            "K": "44.6983445"
        },
        {
            "phone": "0165\/40075",
            "opening": "Dal Luned\u00ec alla Domenica:9.00-19.30;Domenica estivo:16-19.30;Domenica invernali:15.30-19.00",
            "name": "AOSTA",
            "address": "AOSTA-VIA GRAMSCI,4-11100",
            "B": "7.318296199999963",
            "K": "45.7364728"
        },
        {
            "phone": "0144\/322115",
            "opening": "Lunedi:9.00-12.30\/15.300-19.30;dal Marted\u00ec al Venerd\u00ec:9.00-19.30;Sabato:9.00-12.30\/15.00-19.30;Domenica estivo:17.00-20.30;Domenica invernale:16.00-19.30",
            "name": "ACQUI TERME",
            "address": "ACQUI TERME-CORSO ITALIA,34-15011",
            "B": "8.469751999999971",
            "K": "44.674918"
        },
        {
            "phone": "0321398206",
            "opening": "Dal Luned\u00ec al Sabato:9.00-19.30;Domenica:15.30-19.30",
            "name": "NOVARA",
            "address": "NOVARA-CORSO ITALIA,27\/A-28100",
            "B": "8.619934199999989",
            "K": "45.4468123"
        },
        {
            "phone": "0859\/614972",
            "opening": "Orario continuato:10.00-20.00",
            "name": "PESCARA OUTLET",
            "address": "CITTA' SANT'ANGELO-VIA MOSCAROLA-65013",
            "B": "-91.7733566",
            "K": "38.28214090000001"
        },
        {
            "phone": "0421\/307260",
            "opening": "Orario continuato:10.00-20.00",
            "name": "OUTLET BIMBUS",
            "address": "NOVENTA DI PIAVE-VIA MARCO POLO,1-30020",
            "B": "12.53522709999993",
            "K": "45.67136920000001"
        },
        {
            "phone": "0935\/534003",
            "opening": "Orario continuato:10.00-20.00",
            "name": "OUTSTORE SRL",
            "address": "AGIRA-CONTRADA MANDRE BIANCHE-94011",
            "B": "-122.37",
            "K": "37.58"
        },
        {
            "phone": "0586\/882204",
            "opening": "Orario Estivo:9.30-20.00;Orario invernale:9.30-13.00\/15.30-19.30",
            "name": "LIVORNO",
            "address": "LIVORNO-VIA GRANDE,197-57123",
            "B": "10.307041199999958",
            "K": "43.5498741"
        },
        {
            "phone": "0187\/894251",
            "opening": "Orario continuato:10.00-20.00",
            "name": "SHOPPINN BRUGNATO 5 TERRE",
            "address": "BRUGNATO-VIA NUOVA ANTICA ROMANA-19020",
            "B": "-74.93256830000001",
            "K": "40.09944249999999"
        },
        {
            "phone": "0114\/031250",
            "opening": "Dal Luned\u00ec al Sabato:8.30-21.00;Domenica:9.00-21.00",
            "name": "CENTRO COMMERCIALE PIAZZA PARADISO",
            "address": "COLLEGNO-VIA FERMI,14-10093",
            "B": "7.592546200000015",
            "K": "45.0792702"
        },
        {
            "phone": "0143\/686370",
            "opening": "Orario continuato:10.00-20.00",
            "name": "SERRAVALLE DESIGNER OUTLET",
            "address": "SERRAVALLE SCRIVIA-VIA DELLA MODA,1-15069",
            "B": "-79.76999999999998",
            "K": "40.57"
        },
        {
            "phone": "0321\/875934",
            "opening": "Orario continuato:10.00-20.00",
            "name": "VICOLUNGO THE STYLE OUTLETS",
            "address": "VICOLUNGO-VIA SAN MARTINO DI ZUSIAGNA,56\/C-28060",
            "B": "8.461615199999983",
            "K": "45.4789961"
        },
        {
            "phone": "0524\/201016",
            "opening": "Orario continuato:10.00-20.00",
            "name": "FIDENZA SHOPPING PARK",
            "address": "FIDENZA-VIA SAN MICHELE CAMPAGNA LOC. CHIUSA FERRANDA",
            "B": "10.061731000000009",
            "K": "44.865102"
        },
        {
            "phone": "030\/6813001",
            "opening": "Orario continuato:10.00-20.00",
            "name": "FRANCIACORTA OUTLET VILLAGE",
            "address": "FRANCIACORTA-P.ZZA CASCINA MOIE 1(RODENGO SAIANO)-25050",
            "B": "10.119649999999979",
            "K": "45.57827"
        },
        {
            "phone": "0575\/649129",
            "opening": "Orario continuato:10.00-20.00",
            "name": "VALDICHIANA OUTLET VILLAGE",
            "address": "FOIANO DELLA CHIANA-VIA ENZO FERRARI, 5- 52045",
            "B": "11.79706299999998",
            "K": "43.22692"
        },
        {
            "phone": "0174\/529612",
            "opening": "Orario continuato:10.00-20.00",
            "name": "MONDOVICINO OUTLET VILLAGE",
            "address": "MONDOVI'-PIAZZA MONDOVICINO,43-12084",
            "B": "-73.90658830000001",
            "K": "42.7003239"
        },
        {
            "phone": "0432\/2836331",
            "opening": "Orario continuato:10.00-20.00",
            "name": "PALMANOVA OUTLET VILLAGE",
            "address": "AIELLO FRIULI- IOANNIS-33041",
            "B": "13.345269499999972",
            "K": "45.8758081"
        },
        {
            "phone": "0823\/609648",
            "opening": "Orario continuato:10.00-20.00",
            "name": "LA REGGIA DESIGNER OUTLET",
            "address": "MARCIANISE-STRADA PROVINCIALE 336-81025",
            "B": "14.203807999999981",
            "K": "40.9984546"
        },
        {
            "phone": "0119\/473922",
            "opening": "Orario continuato:10.00-20.00;Dicembre:8.30-21.00",
            "name": "CENTRO COMMERCIALE IL GIALDO II",
            "address": "CHIERI-VIA POLESINE,2-10023",
            "B": "7.837580200000048",
            "K": "45.0025399"
        },
        {
            "phone": "0828\/347483",
            "opening": "Da Settembre a Giugno:10.00-21.00;",
            "name": "CILENTO OUTLET VILLAGE",
            "address": "EBOLI-STRADA STATALE,18",
            "B": "14.990107299999977",
            "K": "40.5420608"
        }
    ]
};

$( document ).ready(function() {

    $('#mc-form').ajaxChimp({
        callback: callbackFunction,
        url: 'http://profumeriemodus.us8.list-manage2.com/subscribe/post?u=30ffa49f1659b62632638f43c&amp;id=7a21ed5868',
        language: 'it'
    });

    $('#mc-vipcard').ajaxChimp({
        callback: callbackFunction,
        url: 'http://profumeriemodus.us8.list-manage.com/subscribe/post?u=30ffa49f1659b62632638f43c&amp;id=e0a7a17aeb',
        language: 'it'
    });

    function callbackFunction (resp) {
        console.log(resp);
        if (resp.result === 'success') {

        }
    }

	//start slider depending of resolution
    var width_page = $(document).width();
	$('body').scrollspy({ target: '#menu' })
	//$('.bttrlazyloading').bttrlazyloading();
	$.getJSON( "http://modus.axantlabs.com/modusnews/api/get_all_news.json" )
                .done(function( json ) {

                    $.each(json.news, function( index, value ) {
                        $( ".slider1" ).append('<div class="slide"><a data-lightbox="set1" href="'+json.news[ index ].image+'"><img class="bttrlazyloading" alt="" width="600" height="1000" src="'+json.news[ index ].image+'" /></a></div>');
                    });
                    if( width_page < 540 ) {
                        $('.slider1').bxSlider({
                            slideWidth: 280,
                            minSlides: 1,
                            maxSlides: 1,
                            moveSlides: 1,
                            slideMargin: 0,
                            responsive: true
                        });
                    }


    if( width_page > 540 && width_page <= 649 ) {
      $('.slider1').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 2,
        moveSlides: 1,
        slideMargin: 0
      });       
    }

    if( width_page >= 650 && width_page <= 959 ) {
      $('.slider1').bxSlider({
        slideWidth: 190,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 0
      });       
      
    }
    
    if( width_page >= 960 ) {
      $('.slider1').bxSlider({
        slideWidth: 300,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 20
      }); 
    
    }
	  })
	  .fail(function( jqxhr, textStatus, error ) {
	    var err = textStatus + ", " + error;
	    console.log( "Request Failed: " + err );
	});



    $(places.points).each($).wait(10, function(index) {

        address = $(this)[0].address;
        desc = $(this)[0].opening + '<br />Telefono ' +$(this)[0].phone;
        title = $(this)[0].name;
        pop = '<h6>' + title + '</h6><p><span class="address">' + address + '</span><br /><span class="desc">' + desc + '</span></p>';
        $("ul#lista").append('<li class="shop"><img class="bttrlazyloading" alt="" width="622" height="622" src="http://profumeriemodus.it/new/images/shops/shopbag-3f01ddb8.png" /><h6>' + title + '</h6><p><span class="address">' + address + '</span><br /><span class="desc">' + desc + '</span></p></li>');
        latlong = new google.maps.LatLng($(this)[0].K, $(this)[0].B);

        var random = 1 + Math.floor(Math.random() * 3);
        var marker = new google.maps.Marker({
            map: map,
            position: latlong,
            icon: "http://profumeriemodus.it/new/images/modusUI_final_pinmap.png",
            title: title
        });

        // Set up markers with info windows
        google.maps.event.addListener(marker, 'click', function () {
            // Close all open infowindows
            if (infowindow) {
                infowindow.close();
            }

            infowindow = new google.maps.InfoWindow({
                content: pop
            });

            infowindow.open(map, marker);
        });
    });

    // http://modus.axantlabs.com/pointofsale/api/get_all_points.json
    /*$.getJSON( places)
        .done(function( json ) {

           $(json.points).each($).wait(10, function(index) {
               address = json.points[index].address;
               desc = json.points[index].opening+'<br />Telefono '+json.points[index].phone;
               title = json.points[index].name;
               $( "ul#lista" ).append('<li class="shop"><img class="bttrlazyloading" alt="" width="622" height="622" src="http://profumeriemodus.it/new/images/shops/shopbag-3f01ddb8.png" /><h6>'+title+'</h6><p><span class="address">'+address+'</span><br /><span class="desc">'+desc+'</span></p></li>');
               latlong = new google.maps.LatLng(json.points[index].K,json.points[index].B);

               var random = 1 + Math.floor(Math.random() * 3);
               var marker = new google.maps.Marker({
                   map: map,
                   position: latlong,
                   icon: "images/modusUI_final_pinmap.png",
                   title: title,
               });

               // Set up markers with info windows
               google.maps.event.addListener(marker, 'click', function() {
                   // Close all open infowindows
                   if (infowindow) {
                       infowindow.close();
                   }

                   infowindow = new google.maps.InfoWindow({
                       content: desc
                   });

                   infowindow.open(map,marker);
               });
               *//*geocoder.geocode( { 'address': address}, function(results, status) {


                   if (status == google.maps.GeocoderStatus.OK) {
                       latlong = results[0].geometry.location;
                       console.log(title,latlong);
                       var random = 1 + Math.floor(Math.random() * 3);
                       var marker = new google.maps.Marker({
                           map: map,
                           position: latlong,
                           icon: "images/modusUI_final_pinmap.png",
                           title: title,
                       });

                       // Set up markers with info windows
                       google.maps.event.addListener(marker, 'click', function() {
                           // Close all open infowindows
                           if (infowindow) {
                               infowindow.close();
                           }

                           infowindow = new google.maps.InfoWindow({
                               content: desc
                           });

                           infowindow.open(map,marker);
                       });
                   } else {
                       console.log( "Geocode was not successful for the following reason: " + status);
                   }
               });*//*

            });


        }).fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });*/
});






$("button.btn#lista_negozi").click(function(){
	$(this).fadeOut('slow', function(){
		$("ul#lista").slideDown();
	});

});