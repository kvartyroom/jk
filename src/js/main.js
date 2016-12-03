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
			verticalFit: true
		}
	});
})
