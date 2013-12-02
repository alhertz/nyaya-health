/*global define */
define([], function () {
	// Preloader
	$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut(); 
    $('body').delay(350).css({'overflow':'visible'});
  })
  // Vimeo embed show, hide, and sizing.
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
		  $('.state-two, .close').fadeOut('slow');
		  $('.branding').css( "background", "transparent" );
		  $('.hero').delay(350).removeClass('playing');
		});
	});
});