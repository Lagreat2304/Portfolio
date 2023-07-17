jQuery(document).ready(function () {
	"use strict";
	rkv_tm_modalbox();
	rkv_tm_nav_bg();
	rkv_tm_trigger_menu();
	rkv_tm_service_popup();
	rkv_tm_modalbox_news();
	rkv_tm_modalbox_portfolio();
	progress_by_frenify();
	rkv_tm_mycounter();
	rkv_tm_projects();
	rkv_tm_portfolio();
	rkv_tm_cursor();
	rkv_tm_imgtosvg();
	rkv_tm_popup();
	rkv_tm_data_images();
	rkv_tm_owl_carousel();
	rkv_tm_input_padding();
	rkv_tm_totop();
	rkv_tm_down();
	jQuery(window).load('body', function () {
		rkv_tm_my_load();
	});
	jQuery(window).on('scroll', function () {
		rkv_tm_progress_line();
	});
});

function rkv_tm_modalbox() {
	"use strict";
	jQuery('.rkv_tm_all_wrap').prepend('<div class="rkv_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

function rkv_tm_nav_bg() {
	"use strict";
	jQuery(window).on('scroll', function () {
		var menu = jQuery('.rkv_tm_header');
		var progress = jQuery('.progressbar');
		var WinOffset = jQuery(window).scrollTop();
		if (WinOffset >= 100) {
			menu.addClass('animate');
			progress.addClass('animate');
		} else {
			menu.removeClass('animate');
			progress.removeClass('animate');
		}
	});
}

function rkv_tm_trigger_menu() {
	"use strict";
	var hamburger = jQuery('.trigger .hamburger');
	var mobileMenu = jQuery('.rkv_tm_mobile_menu .dropdown');
	var mobileMenuList = jQuery('.rkv_tm_mobile_menu .dropdown .dropdown_inner ul li a');
	hamburger.on('click', function () {
		var element = jQuery(this);
		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobileMenu.slideUp();
		} else {
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	mobileMenuList.on('click', function () {
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

function rkv_tm_service_popup() {
	"use strict";
	var modalBox = jQuery('.rkv_tm_modalbox');
	var button = jQuery('.rkv_tm_services .service_list ul li .rkv_tm_full_link');
	var closePopup = modalBox.find('.close');
	button.on('click', function () {
		var element = jQuery(this);
		var parent = element.closest('.rkv_tm_services .service_list ul li');
		var elImage = parent.find('.popup_service_image').attr('src');
		var title = parent.find('.title').html();
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + elImage + '"></div></div>');
		rkv_tm_data_images();
		modalBox.find('.service_popup_informations .image').after('<div class="main_title">' + title + '</div>');
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

function rkv_tm_modalbox_news() {
	"use strict";
	var modalBox = jQuery('.rkv_tm_modalbox');
	var button = jQuery('.rkv_tm_news .rkv_tm_full_link,.rkv_tm_news ul li .details .title a');
	var closePopup = modalBox.find('.close');
	button.on('click', function () {
		var element = jQuery(this);
		var parent = element.closest('.list_inner');
		var content = parent.find('.news_hidden_details').html();
		var image = element.closest('.list_inner').find('.image .main').data('img-url');
		var category = parent.find('.details .category').html();
		var title = parent.find('.details .title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details"><h3>' + title + '</h3><span>' + category + '</span><div>');
		rkv_tm_data_images();
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

function rkv_tm_modalbox_portfolio() {
	"use strict";
	var modalBox = jQuery('.rkv_tm_modalbox');
	var button = jQuery('.rkv_tm_portfolio .portfolio_popup');
	var closePopup = modalBox.find('.close');
	button.off().on('click', function () {
		var element = jQuery(this);
		var parent = element.closest('.inner');
		var content = parent.find('.hidden_content').html();
		var image = parent.find('.entry .main').data('img-url');
		var category = parent.find('.entry').data('category');
		var title = parent.find('.entry').data('title');
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="' + image + '"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3>' + title + '</h3><span><a href="#">' + category + '</a></span><div>');
		rkv_tm_data_images();
		return false;
	});
	closePopup.on('click', function () {
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

function rkv_tm_portfolio() {
	"use strict";
	if (jQuery().isotope) {
		var filter = jQuery('.rkv_tm_portfolio .portfolio_filter ul');
		if (filter.length) {
			filter.find('a').on('click', function () {
				var element = jQuery(this);
				var selector = element.attr('data-filter');
				var list = element.closest('.rkv_tm_portfolio').find('.portfolio_list').children('ul');
				list.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});
		}
	}
}

function rkv_tm_projects() {
	"use strict";
	jQuery('.rkv_tm_portfolio_animation_wrap').each(function () {
		jQuery(this).on('mouseenter', function () {
			if (jQuery(this).data('title')) {
				jQuery('.rkv_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.rkv_tm_portfolio_titles').addClass('visible');
			}
			jQuery(document).on('mousemove', function (e) {
				jQuery('.rkv_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function () {
			jQuery('.rkv_tm_portfolio_titles').removeClass('visible');
		});
	});
}

function tdProgress(container) {
	"use strict";
	container.find('.progress_inner').each(function () {
		var progress = jQuery(this);
		var pValue = parseInt(progress.data('value'), 10);
		var pColor = progress.data('color');
		var pBarWrap = progress.find('.bar');
		var pBar = progress.find('.bar_in');
		var number = progress.find('.number');
		var label = progress.find('.label');
		number.css({
			right: (100 - pValue) + '%'
		});
		setTimeout(function () {
			label.addClass('opened');
		}, 500);
		pBar.css({
			width: pValue + '%',
			backgroundColor: pColor
		});
		setTimeout(function () {
			pBarWrap.addClass('open');
		});
	});
}

function progress_by_frenify(wrapper) {
	"use strict";
	var element;
	if (wrapper) {
		element = wrapper.find('.dodo_progress');
	} else {
		element = jQuery('.dodo_progress');
	}
	element.each(function () {
		var pWrap = jQuery(this);
		pWrap.find('.number').css({
			right: '100%'
		});
		console.log(pWrap.find('.number').length);
		pWrap.waypoint({
			handler: function () {
				tdProgress(pWrap);
			},
			offset: '90%'
		});
	});
}
jQuery('.tilt-effect').tilt({
	maxTilt: 6,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	speed: 500,
	transition: true
})

function rkv_tm_preloader() {
	"use strict";
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	if (!isMobile) {
		setTimeout(function () {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function () {
			preloader.remove();
		}, 2000);
	} else {
		preloader.remove();
	}
}

function rkv_tm_mycounter() {
	"use strict";
	jQuery('.rkv_tm_counter').removeClass('stop');
	jQuery('.rkv_tm_counter').each(function () {
		var el = jQuery(this);
		el.waypoint({
			handler: function () {
				if (!el.hasClass('stop')) {
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},
					});
				}
			},
			offset: '95%'
		});
	});
}

function rkv_tm_my_load() {
	"use strict";
	var speed = 500;
	setTimeout(function () {
		rkv_tm_preloader();
	}, speed);
}

function rkv_tm_cursor() {
	"use strict";
	var myCursor = jQuery('.mouse-cursor');
	if (myCursor.length) {
		if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
	}
};

function rkv_tm_imgtosvg() {
	"use strict";
	jQuery('img.html').each(function () {
		var jQueryimg = jQuery(this);
		var imgClass = jQueryimg.attr('class');
		var imgURL = jQueryimg.attr('src');
		jQuery.get(imgURL, function (data) {
			var jQuerysvg = jQuery(data).find('svg');
			if (typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
			}
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');
			jQueryimg.replaceWith(jQuerysvg);
		}, 'xml');
	});
}

function rkv_tm_popup() {
	"use strict";
	jQuery('.gallery_zoom').each(function () {
		jQuery(this).magnificPopup({
			delegate: 'a.zoom',
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	});
	jQuery('.popup-youtube, .popup-vimeo').each(function () {
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	jQuery('.soundcloude_link').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

function rkv_tm_data_images() {
	"use strict";
	var data = jQuery('*[data-img-url]');
	data.each(function () {
		var element = jQuery(this);
		var url = element.data('img-url');
		element.css({
			backgroundImage: 'url(' + url + ')'
		});
	});
}

function rkv_tm_owl_carousel() {
	"use strict";
	var carousel = jQuery('.rkv_tm_testimonials .owl-carousel');
	var rtlMode = false;
	if (jQuery('body').hasClass('rtl')) {
		rtlMode = 'true';
	}
	carousel.owlCarousel({
		loop: true,
		items: 1,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		rtl: rtlMode,
		dots: true,
		nav: false,
		navSpeed: false
	});
	rkv_tm_imgtosvg();
}
$('.grid').masonry({
	itemSelector: '.grid-item',
});

function rkv_tm_input_padding() {
	"use strict";
	var inpText = jQuery('.rkv_tm_subscribe .field input[type="text"]');
	var inpSubmit = jQuery('.rkv_tm_subscribe .field input[type="submit"]').outerWidth();
	inpText.css({
		paddingRight: inpSubmit + 30 + 'px'
	});
}

function rkv_tm_progress_line() {
	"use strict";
	var line = jQuery('.progressbar .line');
	var documentHeight = jQuery(document).height();
	var windowHeight = jQuery(window).height();
	var winScroll = jQuery(window).scrollTop();
	var value = (winScroll / (documentHeight - windowHeight)) * 100;
	var position = value;
	line.css('height', position + "%");
}

function rkv_tm_totop() {
	"use strict";
	var text = $('.progressbar .text');
	text.css({
		bottom: 105 + text.width()
	});
	$(".progressbar a").on('click', function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});
}
jQuery('.anchor_nav').onePageNav();

function rkv_tm_down() {
	"use strict";
	var topbar = jQuery('.rkv_tm_header').outerHeight();
	jQuery('.anchor').on('click', function () {
		if ($.attr(this, 'href') !== '#') {
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - topbar - 175
			}, 800);
		}
		return false;
	});
}
new WOW().init();
$('.portfolio_list').waitForImages().done(function () {
	$('.grid').masonry({
		itemSelector: '.grid-item',
	});
});