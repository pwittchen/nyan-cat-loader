//<![CDATA[
	$(document).ready(function() {				
		$(".button").click(function(){
			$(".button").delay(500).fadeOut('slow');
			$(".rainbow").switchClass("rainbow", "rainbow-loaded", 3000);
			$(".text").delay(3100).text("100% loaded").fadeIn('slow');
		});
		
		$(".text").click(function(){
			$(".text").delay(1000).fadeOut('slow');
			$(".rainbow-loaded").switchClass("rainbow-loaded", "rainbow", 1000);
			$(".button").delay(2000).fadeIn('slow');
		});
		
	});
//]]>