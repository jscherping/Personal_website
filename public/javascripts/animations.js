$(document).ready(function(){
	$("#header, #nav, #submit").hide();
	$('#header').fadeIn('slow', function(){
		$('#nav').fadeIn('slow');
   	});
	var rotate_degrees1 = 45, rotate_degrees2 = 45, rotate_degrees3 = 45;
	var end1 = false, end2 = false, end3 = false;
	var margin_size = 50;
	var intervalID1, intervalID2, intervalID3;
	var titleID = 0;
	var clicked = false;
	
	/* Page title - animation */
	setInterval(function(){
		$('#titles').animate({opacity: 0}, function(){
			if (titleID == 0) $('#titles').text("Music");
			else if (titleID == 1) $('#titles').text("Web Design");
			else $('#titles').text("Programming");
			titleID = ++titleID % 3;
		});
		$('#titles').animate({opacity: 1});
	}, 5000);	
	
	/* Map button + story section reveal */
	$('#navTop').mouseenter(function() {
		if (!end1){
			intervalID1 = window.setInterval(function(){
    			rotate_degrees1--;
    			$('#navTop').css({'-webkit-transform' : 'rotate(' + rotate_degrees1 + 'deg)',
    								'-moz-transform': 'rotate(' + rotate_degrees1 + 'deg)',
									'-ms-transform': 'rotate(' + rotate_degrees1 + 'deg)',
									'-o-transform': 'rotate(' + rotate_degrees1 + 'deg)',
									'transform': 'rotate(' + rotate_degrees1 + 'deg)'});
    			if (rotate_degrees1 == 0){
    				clearInterval(intervalID1);
    				$('#navTop').animate({'opacity': '0'}, function(){
    					$('#contentTop').animate({opacity: 0.85}, function(){
    						$('#i').text(".lifeMap");
    						$('#navTop').animate({'opacity':'1', 'width':'+=20px'});
    					});
    				});
    			}
			}, 5);
			$(this).css("opacity", "1");
			end1 = !end1;
		}
		else $(this).css({"color":"#000000", "border-color": "#ffffff"});
	});
	$('#navTop').mouseleave(function(){
   		$(this).css({"color": "#ffffff", "border-color": "#000000"});
	});
	
	/* Resume button + stats section reveal */
	$('#navMiddle').mouseenter(function() {
		if (!end2){
			intervalID2 = window.setInterval(function(){
    			rotate_degrees2--;
    			$('#navMiddle').css({'-webkit-transform' : 'rotate(' + rotate_degrees2 + 'deg)',
    								'-moz-transform': 'rotate(' + rotate_degrees2 + 'deg)',
									'-ms-transform': 'rotate(' + rotate_degrees2 + 'deg)',
									'-o-transform': 'rotate(' + rotate_degrees2 + 'deg)',
									'transform': 'rotate(' + rotate_degrees2 + 'deg)'});
    			if (rotate_degrees2 == 0){
    				clearInterval(intervalID2);
    				$('#navMiddle').animate({'opacity': '0'}, function(){
    					$('#contentMiddle').animate({opacity: 0.85}, function(){
    						$('#s').text(".resumé");
    						$('#navMiddle').animate({'opacity':'1', 'width':'+=20px'});
    					});
    				});
    			}
			}, 5);
			$(this).css("opacity", "1");
			end2 = !end2;
		}
		else $(this).css({"color":"#000000", "border-color": "#ffffff"});
	});
	$('#navMiddle').mouseleave(function(){
		$(this).css({"color": "#ffffff", "border-color": "#000000"});
	});
	
	/* Get() section reveal */
	$('#navBottom').mouseenter(function() {
   		if (!end3){
			intervalID3 = window.setInterval(function(){
    			rotate_degrees3--;
    			$('#navBottom').css({'-webkit-transform' : 'rotate(' + rotate_degrees3 + 'deg)',
    								'-moz-transform': 'rotate(' + rotate_degrees3 + 'deg)',
									'-ms-transform': 'rotate(' + rotate_degrees3 + 'deg)',
									'-o-transform': 'rotate(' + rotate_degrees3 + 'deg)',
									'transform': 'rotate(' + rotate_degrees3 + 'deg)'});
    			if (rotate_degrees3 == 0){
    				clearInterval(intervalID3);
    				$('#navBottom').slideUp(400, function(){
    					$('#contentBottom').animate({opacity: 0.85});
    				});
    			}
			}, 5);
			$(this).css("opacity", "1");
			end3 = !end3;
		}
		else $(this).css({"color":"#000000", "border-color": "#ffffff"});
	});
   	$('#navBottom').mouseleave(function(){
   		$(this).css({"color": "#ffffff", "border-color": "#000000"});
	});
   	$('img.logo').mouseenter(function(){
   		$(this).css({"border-color": "#ffffff"});
   	});
   	$('img.logo').mouseleave(function(){
   		$(this).css({"border-color": "#000000"});
   	});
   	$('#numBox').click(function(){
   		if (!clicked){
   			$('form').append("<span id = 'headOrange' class = 'head'>Press enter to submit.</span>");
			clicked = true;
		}   
   	});
});