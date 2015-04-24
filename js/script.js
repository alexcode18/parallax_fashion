var desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum sed felis et elementum. Fusce a magna ante. Aliquam volutpat justo nibh, non posuere nibh porta non. Sed in egestas elit. Morbi volutpat eu lorem non congue. Pellentesque sagittis arcu est, eget congue risus commodo quis. Nulla interdum condimentum mi vitae sollicitudin. Pellentesque viverra a mi ut blandit. Proin convallis elementum lacus, nec iaculis orci dapibus non. Ut eros leo, commodo nec rhoncus id, posuere eget lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce interdum sed felis et elementum. Fusce a magna ante. Aliquam volutpat justo nibh, non posuere nibh porta non. Sed in egestas elit. Morbi volutpat eu lorem non congue. Pellentesque sagittis arcu est, eget congue risus commodo quis. Nulla interdum condimentum mi vitae sollicitudin. Pellentesque viverra a mi ut blandit. Proin convallis elementum lacus, nec iaculis orci dapibus non. Ut eros leo, commodo nec rhoncus id, posuere eget lectus.";

var slideArray = ['design','color','dye', 'cut','stitch','love'];

$(function() {
	$('body').on('click', '#nav li a', toggleNavLi);
	$('body').on('click', '#nav_toggle', toggleNav);
	
	for (var i = 1; i <= slideArray.length; i++) {
		var navHtml = '<li><a href="#slide' + i + '" title="Slide ' + i + '">' + slideArray[i - 1] + '</a></li>';
		var slideHtml = '<div class="slide" id="slide' + i + '"><div class="slide_header"><h3>' + slideArray[i - 1] + '</h3></div><div><p class="description"></p></div></div>';
		$('#slide_container').append(slideHtml);
		$('nav ul').append(navHtml);
	}

	$('.description').text(desc);
  $('a[href*=#]').each(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;
				$(this).click(function() {
					toggleNavLi(targetOffset);
				});
			}
		}
  });

  $(window).resize(function(){
		if ($(window).width() >= 900){	
			$("nav").show();
		}else{
			$('#nav_toggle').text('+');
			$("nav").hide();
		}	
	});
});

function toggleNavLi(offset) {
	$('#nav li a').removeClass('active');
	$(this).addClass('active');
	$('html, body').animate({scrollTop: offset}, 1000);
	return false;
}

function toggleNav() {
	$('nav').slideToggle();
	if ($('#nav_toggle').text() == 'x') {
		$('#nav_toggle').text('+');
	} else {
		$('#nav_toggle').text('x');
	}
}
