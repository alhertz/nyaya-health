/*global define */
define([], function () {
  $(function(){
	  $('.hero, .video iframe').css({'height':(($(window).height())-240)+'px'});
		$(window).resize(function(){
	  	$('.hero, .video iframe').css({'height':(($(window).height())-240)+'px'});
		});
		$( ".play" ).click(function() {
			$('.state-one').fadeOut();
		  $('.state-two, .close').fadeIn();
		  $('.branding').css( "background", "#000" );
		  $('.hero').addClass('playing');
		});
		$( ".close" ).click(function() {
			$('.state-one').fadeIn();
		  $('.state-two, .close').fadeOut('fast');
		  $('.branding').css( "background", "transparent" );
		  $('.hero').removeClass('playing');
		});
	});
});
