
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


    $.getJSON( "http://modus.axantlabs.com/pointofsale/api/get_all_points.json" )
        .done(function( json ) {

            $.each(json.points, function (index, value) {
                address = json.points[index].address;
                desc = json.points[index].opening+'<br />Telefono '+json.points[index].phone;
                title = json.points[index].name;
               $( "ul#lista" ).append('<li class="shop"><img class="bttrlazyloading" alt="" width="622" height="622" src="/images/shops/shopbag.png" /><h6>'+title+'</h6><p><span class="address">'+address+'</span><br /><span class="desc">'+desc+'</span></p></li>');

                latlong(address,title,title+"<br/>"+desc);

            });


        }).fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
});






$("button.btn#lista_negozi").click(function(){
	$(this).fadeOut('slow', function(){
		$("ul#lista").slideDown();
	});

});