$(document).ready(function() {
  $('#sliderSquare').noUiSlider({
    start: [24.2, 134.5],
  	connect: true,
  	range: {
  		'min': 20,
  		'max': 150
  	}
  });

  $('#sliderPrice').noUiSlider({
    start: [3.2, 789.5],
  	connect: true,
  	range: {
  		'min': 1,
  		'max': 1000
  	}
  });

  $("#sliderSquare").Link('upper').to('-inline-<div class="slider-tooltip"></div>', function ( value ) {
  	$(this).html(
  		'<span>' + value + '</span>'
  	);
  });
  $("#sliderSquare").Link('lower').to('-inline-<div class="slider-tooltip"></div>', function ( value ) {
  	$(this).html(
  		'<span>' + value + '</span>'
  	);
  });
  $("#sliderPrice").Link('upper').to('-inline-<div class="slider-tooltip"></div>', function ( value ) {
  	$(this).html(
  		'<span>' + value + '</span>'
  	);
  });
  $("#sliderPrice").Link('lower').to('-inline-<div class="slider-tooltip"></div>', function ( value ) {
  	$(this).html(
  		'<span>' + value + '</span>'
  	);
  });

  $('.select-menu__button').on('click', function(event) {
    $(this).toggleClass('select-menu__button_open');
    $(this).parent().next('.select-menu__body').toggleClass('select-menu__body_open');
  })

  $('.select-menu__label').on('click', function(event) {
    $(this).addClass('select-menu__label_active').siblings().removeClass('select-menu__label_active');
    $('.select-menu__button').removeClass('select-menu__button_open');
    $('.select-menu__body').removeClass('select-menu__body_open');
  })

  $('input[name="drop"]').change(function() {
    var value = $("input[name='drop']:checked").val();
    $('.select-menu__title').text(value);
  });

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:false,
    margin:0,
    items: 1
  })

  $('#btnBlock, #btnMap').on('click', function() {
    console.log($(this).attr('id'));
    if ($(this).attr('id') === 'btnBlock') {
      $('.section__map').hide();
      $('.section__blocks').show();
    }
    if ($(this).attr('id') === 'btnMap') {
      $('.section__map').show();
      $('.section__blocks').hide();
    }
  });

  $('.placemark-filter__list').on('click', '.placemark-filter__item', function() {
    $(this).toggleClass('placemark-filter__item_checked');
  });

  $('.card__thumb').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
    closeBtnInside: true,
		mainClass: 'mfp-img-mobile',
    closeMarkup: '<button type="button" class="mfp-close"></button>',
    image: {
			verticalFit: true,
      markup: '<div class="mfp-figure">' +
                  '<div class="mfp-toolbar"></div>' +
                  '<button class="mfp-close"></button>' +
                  '<figure>' +
                      '<div class="mfp-img"></div>' +
                      '<figcaption>' +
                          '<div class="mfp-bottom-bar">' +
                              '<div class="mfp-title">' +
                              '</div>' +
                              '<div id="shareBlock" class="popup__socials"></div>'+
                              '<div class="mfp-counter"></div>' +
                          '</div>' +
                      '</figcaption>' +
                  '</figure>' +
              '</div>'
    },
    callbacks: {
      open: function() {
        // var share = Ya.share2('shareBlock', {
        //     theme: {
        //       services: 'facebook,vkontakte'
        //     }
        // });
      },
    }
	});
  $('.gallery__list').magnificPopup({
    delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
    closeMarkup: '<button type="button" class="mfp-close"></button>',
    image: {
			verticalFit: true,
    },
    callbacks: {
      open: function() {
        // var share = Ya.share2('shareBlock', {
        //     theme: {
        //       services: 'facebook,vkontakte'
        //     }
        // });
      },
      buildControls: function() {
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      }
    }
	});
})
