/*global define */
define([], function () {
    'use strict';

    return '\'Allo \'Allo!';
});
$(function(){
  $('.hero').css({'height':(($(window).height())-155)+'px'});
	$(window).resize(function(){
  	$('.hero').css({'height':(($(window).height())-155)+'px'});
	});
});