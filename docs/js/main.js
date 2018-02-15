/*
words to learn:
To get a value: 値を取得する



*/
var header = $( 'header .container-inner' );
var header_height = header.height();
var header_offset = header.offset();
var window_scroll_value = $(window).scrollTop();
$(window).scroll(function() {
	window_scroll_value = $(window).scrollTop();
	if ( window_scroll_value >= header_offset.top ) {
		header.addClass('fixed');
		$('body').css('margin-top', header_height + "px");
	} 
	else {
		header.removeClass('fixed');
	}
});
