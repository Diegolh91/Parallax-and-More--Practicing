$(document).ready(function(){
	var navTop = ($("nav").offset().top); /*Goes outside so the value won't change*/
	
	$(window).scroll(function(){ /* Si se hace scroll en la ventana*/
		var wScroll = $(this).scrollTop();
		$("#logo").css({
			"-webkit-transform": "translate( 0px,"+ wScroll/1.5 + "%)"
		});
		$("#cup1").css({
			"-webkit-transform": "translate( 0px,-"+ wScroll/1.3 + "%)"
		});
		$("#cup2").css({
			"-webkit-transform": "translate( 0px,"+ wScroll/1.3 + "%)"
		});
		$("#coffee-box1").css({
			"-webkit-filter":" blur("+ wScroll*0.03 +"px)",
			"-webkit-filter":" grayscale("+ wScroll*0.275 +"%)"
		});
		
		if(wScroll >  ($(window).height() / 2)){ /*is higher than half of the screen*/
			$("#rows figure").each(function(i){ /*the i gives an index to each figure*/
				setTimeout(function(){ /* Execute the nect action after a specified delay in miliseconds*/
					$("#rows figure").eq(i).addClass("is-showing"); /*will find each figure 1 by 1*/
				}, 150 *(i+1)); /*The delay in miliseconds*/
			});
		}
		/*Menu Bar if the scroll position is higher than the top bar*/
		if(wScroll >= navTop){
			$("nav").addClass("fixed");	
			$("#navDiv").addClass("navDivClass");
		}else{
			$("nav").removeClass("fixed");
			$("#navDiv").removeClass("navDivClass");
		}
		
		/*Circle Effect*/
		
		if(wScroll > $("#large-cup").offset().top -$(window).height()){
			$("#large-cup").css({"background-position":"center"+ (wScroll - $("#large-cup").offset().top )+"px"});
			var opac = (wScroll - ($("#large-cup").offset().top) + 400)/(wScroll/3.2);
			$("#window-tint").css({"opacity": opac})
		}
		if(wScroll > $("#large-cup1").offset().top -$(window).height()){
			$("#large-cup1").css({"background-position":"center"+ (wScroll - $("#large-cup1").offset().top )+"px"});
			var opac = (wScroll - ($("#large-cup1").offset().top) + 400)/(wScroll/3.7);
			$("#window-tint1").css({"opacity": opac})
		}
		
	});
});
