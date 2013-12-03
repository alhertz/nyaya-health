/*global define */
define([], function () {
	var player = $("#player");
  froogaloop = $f(player[0].id);
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
		  // Start dat video
		  froogaloop.api('play');
		});
		$( ".close" ).click(function() {
			$('.state-one').fadeIn();
		  $('.state-two, .close').fadeOut('slow');
		  $('.branding').css( "background", "transparent" );
		  $('.hero').removeClass('playing');
		  // Stop dat video
		  froogaloop.api('pause');
		});
	});
});