// JavaScript Document
$(document).ready(function(e) {
 // Instantiate the Bootstrap carousel
	$('.multi-item-carousel').carousel({
	  interval: false
	});

/* Added By Chandan */
		if($(window).width()>= 768){
	//for ipad portrait
	//if($(window).width()>= 745){
		$('#office365Carousel').removeClass('slide carousel');
		$('#office365Carousel').find('.item').css('display', 'block').removeClass('item');
		//$('.carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel .carousel-control').remove();
	}
	//Initial styling of FAQ accordion
	$('#productFAQAccordion .panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 99% 50%'
	);
	$('#productFAQAccordion .panel-heading a.collapsed').parent().parent().css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 99% 50%'
	);
	//dynamic styling of FAQ accordion
	$('#productFAQAccordion .panel').on('shown.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 99% 50%'
		);
	});
	$('#productFAQAccordion .panel').on('hidden.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 99% 50%'
		);
	});
	/*chandan*/
	//Initial styling of FAQ accordion
	$('#planDetailsFAQAccordion .panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 99% 50%'
	);
	$('#planDetailsFAQAccordion .panel-heading a.collapsed').parent().parent().css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 99% 50%'
	);
	
	//dynamic styling of FAQ accordion
	$('#planDetailsFAQAccordion .panel').on('shown.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 99% 50%'
		);
	});
	$('#planDetailsFAQAccordion .panel').on('hidden.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background',
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 99% 50%'
		);
	});
	
/*chandan*/

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.


// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.

if($(window).width()>767){
	$('.multi-item-carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
		next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  if (next.next().length>0) {
		next.next().children(':first-child').clone().appendTo($(this));
	  } else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	  }
	});
}


// Navigation Slide In
	$('body').on('click','.menu-top-mob',function() { 
		$('.menutopMobi').html($('.main-menu-cont').html());
		//console.log($('nav').html());
		//$('nav').addClass('slide-in');
		$('html').css("overflow", "hidden");
		$('#overlay').show();
		return false;
	});

	// Navigation Slide Out
	$('.responsive-nav-close').click(function() {
		$('nav').removeClass('slide-in');
		$('html').css("overflow", "auto");
		$('#overlay').hide();
		return false;
	});
	
	$('body').on('click','.isCollapse',function(){
		if($(this).find('i.glyphicon').hasClass('glyphicon-menu-down')){
			$(this).find('i.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');	
		}else{
			$(this).find('i.glyphicon-menu-up').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');	
		}
	});
	
	$('body').on('click','a.loginPopOver',function(){ 
		$(this).parent('li').addClass('nav-class-top-v1');	
			$('.login-box-top').show();
	});
	
	$('body').on('click','.close-box',function(){ 
		$('a.loginPopOver').parent('li').removeClass('nav-class-top-v1');	
		$('.login-box-top').hide();
	});
	
	var $sidebar   = $("#floatMenu"), 
	$window    = $(window),
	offset     = $sidebar.offset(),
	topPadding = 15;
	$window.scroll(function() {
		if ($window.scrollTop() > offset.top) {
			$sidebar.stop().animate({
				marginTop: $window.scrollTop() - offset.top + topPadding
			});
		} else {
			$sidebar.stop().animate({
				marginTop: 0
			});
		}
	});
	
	
	
	/*  Added By Ramya On 9th June 2016 */
	
	if($(window).width()< 768){
		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	}

	$("#businessPlanDropdown .dropdown-menu li a").click(function(){
		$('#businessPlanDropdown button:first-child').html($(this).html());
		var selectedColumn = $(this).data('value');
		console.log(selectedColumn);
		var list = ['.one', '.two', '.three'];
		list.splice(list.indexOf('.'+selectedColumn), 1);

		$(list.join(', ')).addClass('hidden-xs hidden-sm');
		$("#businessPlanTable" + ' .' + selectedColumn).removeClass('hidden-xs hidden-sm');

		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	});

	//Initial styling of FAQ accordion
	$('#accordion .panel-heading').css('background', 
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 99% 50%'
	);
	$('#accordion .panel-heading a.collapsed').parent().parent().css('background', 
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 99% 50%'
	);
	//dynamic styling of FAQ accordion
	$('#accordion .panel').on('shown.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#666 url(' + './_images/consumer/product/002_Product_Office365_Desktop_16.png' + ')' + ' no-repeat 99% 50%'
		);
	});
	$('#accordion .panel').on('hidden.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#d7d7d7 url(' + './_images/consumer/product/002_Product_Office365_Desktop_15.png' + ')' + ' no-repeat 99% 50%'
		);
	}); 
 
 
 
 if($(window).width()> 767){
		$('#office365Carousel0').removeClass('slide carousel');
		$('#office365Carousel0').find('.item').removeClass('item');
		$('.carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel0 .carousel-control').remove();
	}
	if($(window).width()> 767){
		$('#office365Carousel1').removeClass('slide carousel');
		$('#office365Carousel1').find('.item').removeClass('item');
		$('.carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel1 .carousel-control').remove();
	}
	if($(window).width()> 767){
		$('#office365Carousel2').removeClass('slide carousel');
		$('#office365Carousel2').find('.item').removeClass('item');
		$('.carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel2 .carousel-control').remove();
	}
	if($(window).width()> 767){
		$('#office365Carousel3').removeClass('slide carousel');
		$('#office365Carousel3').find('.item').removeClass('item');
		$('.carousel-inner > div > div').css('margin-bottom', '30px');
		$('#office365Carousel3 .carousel-control').remove();
	}

	if($(window).width()< 768){
		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	}

	$("#businessPlanDropdown .dropdown-menu li a").click(function(){
		$('#businessPlanDropdown button:first-child').html($(this).html());
		var selectedColumn = $(this).data('value');
		console.log(selectedColumn);
		var list = ['.one', '.two', '.three'];
		list.splice(list.indexOf('.'+selectedColumn), 1);

		$(list.join(', ')).addClass('hidden-xs hidden-sm');
		$("#businessPlanTable" + ' .' + selectedColumn).removeClass('hidden-xs hidden-sm');

		$('#businessPlanTable td[colspan="4"]').attr('colspan',2);
	});

//Initial styling of Additional Resources accordion0
	$('#accordion0 .panel-heading').css('background', 
		'#666 url(' + './_images/Order/Capture.PNG' + ')' + ' no-repeat 99% 50%'
	);
	$('#accordion0 .panel-heading a.collapsed').parent().parent().css('background', 
		'#d7d7d7 url(' + './_images/Order/Capture+.PNG' + ')' + ' no-repeat 99% 50%'
	);
	//dynamic styling of FAQ accordion0
	$('#accordion0 .panel').on('shown.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#666 url(' + './_images/Order/Capture.PNG' + ')' + ' no-repeat 99% 50%'
		);
	});
	$('#accordion0 .panel').on('hidden.bs.collapse', function (e) {
		$(e.currentTarget).find('.panel-heading').css('background', 
		'#d7d7d7 url(' + './_images/Order/Capture+.PNG' + ')' + ' no-repeat 99% 50%'
		);
	}); 
});


