$(document).ready(function () {
	$('.header-slider').slick({
		dots: true,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-reight.png"></button>',


	});
	$(".header-burger").click(function (event) {
		$(".header-burger, .menu").toggleClass("active")
	})
	$('.service-slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToScroll: 2,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				
				}
			}
		]
	});
	$('.partner-sleider').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		// variableWidth: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					variableWidth: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToScroll: 3,
					slidesToShow: 3,
					variableWidth: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToScroll: 2,
					slidesToShow: 2,
				}
			},
			// {
			// 	breakpoint: 425,
			// 	settings: {
			// 		slidesToScroll: 1,
			// 		slidesToShow: 1,
			// 		variableWidth: true
			// 	}
			// }

		]

	});
	$('.testim-sleider').slick({
		dots: false,
		infinite: false,

	});
	$("#tabs").tabs();
});