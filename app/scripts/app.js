/*global define */
define([], function () {
  $(function(){
	  $('.hero').css({'height':(($(window).height())-155)+'px'});
		$(window).resize(function(){
	  	$('.hero').css({'height':(($(window).height())-155)+'px'});
		});
	});
});
