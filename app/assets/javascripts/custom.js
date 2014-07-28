$(document).ready(function () {

	/* Page load animations, css changes and variable sets */

	var funds = $('.progress-text span').text();
	var fundslength;
	var fundsMove;

	$('.progress-bar').css('width', (funds / 100)+'%').attr('aria-valuenow', funds);

	$('.progress-text span').each(function () {
		var $this = $(this);
		var $parent = $this.parent();
		jQuery({ Counter: 0 }).animate({ Counter: $this.text()}, {
			duration: 3000,
			easing: 'swing',
			queue: false,
			step: function () {
				fundslength = $this.width();
				fundsMove = ( funds/100 ) - ( (fundslength/5.3) );

				$this.text(Math.ceil(this.Counter));
			}
		});
	});

	
	$('.progress-text').animate({opacity: '1', marginLeft: fundsMove + '%'}, { duration: 3000, easing: 'swing', queue: false });
	/*
	$('.progress-bar').animate({width: '30%'}, { duration: 3000, easing: 'linear', queue: false });
	*/

	var word = $('#logo').width();
	$('.nav-selector').width(word - 9.6);

	/* Interactivity with nav bar */

	$('.nav li a').hover(
		/* mouseEnter */
		function() {
			var hoverlength = $(this).width();
			var hovertext = $(this).text();
			var moveSelector;

			if (hovertext == 'About') {
				moveSelector = '235';
			} else if (hovertext == 'Donate') {
				moveSelector = '382';
			}


			$('#logo').css({"color": '#222'});
			$('.nav-selector').stop().animate({marginLeft: moveSelector, width: hoverlength}, 500, 'swing');
		}, 
		/* mouseLeave */
		function() {
			$('#logo').css({"color": '#ce1126'});
			$('.nav-selector').stop().animate({marginLeft: '0', width: word - 9.6}, 500, 'swing');
		});

});