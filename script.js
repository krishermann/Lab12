$(document).ready(function() {
	

	$("li").hover(function() {
  		$(this).fadeTo('slow', 0.25);
	},

	function(){
		$(this).fadeTo('slow', 1.0);
	});
			
	$("li").click(function(){
  		$(this).toggleClass("highlight");
	});

	var items = $(this).text
	$('li').click(function(){
		if ($(this).text() === "Clicked"){ 
			$(this).text();	
		}
		else {
			$(this).text("Clicked!");;
		}
	});

});

