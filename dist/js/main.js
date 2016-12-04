$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:false,
    margin:0,
    items: 1
  })

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
        var share = Ya.share2('shareBlock', {
            theme: {
              services: 'facebook,vkontakte'
            }
        });
      },
    }
	});
})
