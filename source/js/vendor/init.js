$(document).ready( function () {


    var detectmob = false;  
    if(navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {             
        detectmob = true;
    }
    
    if (detectmob === true) {
      $( '.parallax' ).each(function(){
          $(this).addClass('parallax-mobile');
      });
    }
    else {
        $( '#parallax-one' ).parallax();

    }  


    $('textarea').autosize();

    //header links
    $('header nav a').click(function(){
      $(this).parent().siblings().find('.active').removeClass('active');
      $(this).addClass('active');
    });





    //functions for centering elements in isotope
    $.Isotope.prototype._getCenteredMasonryColumns = function() {
      this.width = this.element.width();
      
      var parentWidth = this.element.parent().width();
      
                    // i.e. options.masonry && options.masonry.columnWidth
      var colW = this.options.masonry && this.options.masonry.columnWidth ||
                    // or use the size of the first item
                    this.$filteredAtoms.outerWidth(true) ||
                    // if there's no items, use size of container
                    parentWidth;
      
      var cols = Math.floor( parentWidth / colW );
      cols = Math.max( cols, 1 );

      // i.e. this.masonry.cols = ....
      this.masonry.cols = cols;
      // i.e. this.masonry.columnWidth = ...
      this.masonry.columnWidth = colW;
    };
    
    $.Isotope.prototype._masonryReset = function() {
      // layout-specific props
      this.masonry = {};
      // FIXME shouldn't have to call this again
      this._getCenteredMasonryColumns();
      var i = this.masonry.cols;
      this.masonry.colYs = [];
      while (i--) {
        this.masonry.colYs.push( 0 );
      }
    };

    $.Isotope.prototype._masonryResizeChanged = function() {
      var prevColCount = this.masonry.cols;
      // get updated colCount
      this._getCenteredMasonryColumns();
      return ( this.masonry.cols !== prevColCount );
    };
    
    $.Isotope.prototype._masonryGetContainerSize = function() {
      var unusedCols = 0,
          i = this.masonry.cols;
      // count unused columns
      while ( --i ) {
        if ( this.masonry.colYs[i] !== 0 ) {
          break;
        }
        unusedCols++;
      }
      
      return {
            height : Math.max.apply( Math, this.masonry.colYs ),
            // fit container to columns that have been used;
            width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
          };
    };


    //script for isotope filtering
    $('#filter_content').isotope({ 

     });

    // cache filter_content
    var $filter_content = $('#filter_content');
    // initialize isotope
    $filter_content.isotope({
      animationOptions: {
         duration: 750,
         queue: false
       }
    });
    // filter items when filter link is clicked
    $('#filters a').click(function(){
      var selector = $(this).attr('data-filter');
      $filter_content.isotope({ filter: selector });
      return false;
    });


    //start slider depending of resolution
    var width_page = $(document).width();
   


    //scripts for resolutions smaller than 768px
    if( width_page < 768 ) {
      $('header nav ul').css('width', width_page);

    //make visible list of #filters on mobile resolution
      $('.filter_wrap').mouseover(function(){
        $('#filters').show();
        $('#filters li a').click(function(){
          $(this).parent().parent().hide();
          var text = $(this).html();
          $('.filter_wrap span').html(text);
          //add <b> element to .filter_wrap
          $('.filter_wrap > span').append('<b></b>');
        });
      });
      $('.filter_wrap').mouseout(function(){
        $('#filters').hide();
      });

      $('header nav').mouseover(function(){
        $(this).children().show();
        $('header nav li a').click(function(){

          $(this).parent().parent().hide();
        });
        
      });
      $('#header').mouseout(function(){
        $('header nav').children().hide();
      });

      // $('header nav').mouseover(function(){
      //     $(this).children().show();
      //     $(this).children().css({
      //       'visibility': 'visible',
      //       'opacity': '1'
      //     });
      // });
      $('.slide .arrow_up').hide();

      $('.slider2 .slide a').click(function() {
       
          // $('.slider2_popups .active-popup').removeClass('active-popup');      
          $(this).removeClass('slvzr-hover');
          var current = $(this).attr('class'); 
          var current_small = $(this).parent();

          $('.slider2_popups .popup-item.'+current).appendTo(current_small);
          
          $('.popup-item.'+current).addClass('active-popup').parent().siblings().children().removeClass('active-popup');

          // alert(current);
          // return false;
      });     

      //height of subheader
      var sub_height = $(window).height() - 2* ($('header').height());
      $('.subheader').css('height', sub_height);

    }

    //scripts for resolutions larger than, or equal to 768px
    if( width_page >= 768 ) {
      $('.slider2 .slide a').click(function() {
        
          $(this).removeClass('slvzr-hover');
          var current = $(this).attr('class'); 
          // alert(current);
          var boxclass = "active-popup";
          var arrowclass = "active-arrow";

          $('.slide .arrow_up.'+current).addClass(arrowclass).parent().siblings().children().removeClass(arrowclass);

          $('.slider2_popups .popup-item.'+current).addClass(boxclass).siblings().removeClass(boxclass);
          return false;
      });  

      //height of subheader
      var sub_height = $(window).height() - 9* ($('header').height());
      $('.subheader').css('height', sub_height);

    }
    


    var top_ofset = $('header').height() - 1;


    $('header li a, .logo, .down, .subheader .btn, footer .container > a').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - top_ofset
      }, 1000);
    });



    $('.popup-item .close').click(function(){
        $('.active-popup').removeClass('active-popup');     
        $('.arrow_up').removeClass('active-arrow');     
    });

    //adding class to list item (make active)
    if( width_page >= 768 ) {
      $('#filters li a').click(function(){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
      });

      var popup_width = $('#team .bx-wrapper').width();
      var popup_left_margin = - ($('#team .bx-wrapper').width() / 2);
      $('.popup-item')
      .css({
        'width': popup_width, 
        'margin-left': popup_left_margin 
      });
    }


    //calculate width of lightbox
    var width_of_lightbox = $('.container').width();
    $('.lb-outerContainer, .lb-dataContainer').css('width', width_of_lightbox);



    //scroll to the top icon
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#to_the_top').fadeIn();
        } else {
            $('#to_the_top').fadeOut();
        }
    });
    $('#to_the_top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        $(this).fadeOut(500);
        return false;
    });



});


//PLACEHOLDER
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur().parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });


// map

var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#d9b6d5"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]}];

  var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"})

  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(42,11),
    scrollwheel: false,
    styles: styles,
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






map.mapTypes.set('map', styledMap);
map.setMapTypeId('map');    