const bleep = new Audio();
	bleep.src = "inecraft_chest_open.mp3";
const closing = new Audio();
	closing.src = "chestclosed.mp3"
var navLinksks = document.getElementById("navLinksks");
			function showMenu(){
				navLinksks.style.right = "0";
			}
			function hideMenu(){
				navLinksks.style.right = "-200px";
			}			
$(document).ready(function(){
$( ".scroll-me" ).click(function(){
	var x = $(window).scrollTop();
	$('html, body').animate({ scrollTop: x + 800})
});   
})

$(document).ready(function(){
$( ".scroll-me-2" ).click(function(){
var x = $(window).scrollTop();
$('html, body').animate({ scrollTop: x + 700})
});
})

