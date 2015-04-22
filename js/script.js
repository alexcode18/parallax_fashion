$(function() {
	$('body').on('click', '#nav li a', toggleNav);
  $('a[href*=#]').each(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname && this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;
				$(this).click(function() {
					$('#nav li').removeClass('active');
					$(this).parent('li').addClass('active');
					$('html, body').animate({scrollTop: targetOffset}, 1000);
					return false;
				});
			}
		}
  });
});

function toggleNav() {
	$('#nav li').removeClass('active');
	$(this).parent('li').addClass('active');
	$('html, body').animate({scrollTop: targetOffset}, 1000);
	return false;
}
