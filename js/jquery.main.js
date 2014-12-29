// Wait for window load
		$(window).load(function() {
			// Animate loader off screen
			$("#loading").css('display','none');
		});

$(document).ready(function(){

//scroll to code 


	 $(function() {
                $('a#bts').bind('click',function(event){
                    var $anchor = $(this);
                    
                    $('html, body').stop().animate({
                        scrollLeft: $($anchor.attr('href')).offset().left
                    }, 12000);

                    event.preventDefault();
                });
            });

//Grahams code

function inView(elem){
			var docLeft = $(window).scrollLeft();
			var docRight = docLeft  + $(window).width() / 2 ;
			
			var elemLeft = $(elem).offset().left;
			var elemRight = elemLeft + $(elem).width() / 2 ;
			
			return ((elemRight >= docLeft) && (elemLeft <= docRight))
		}
		
		/*
		$(window).scroll(function(){
		$('.box').each(function(){
		var elem1 = $(this);
		var myMessage = $('p');
			if(inView(elem1)){
				$(this).find(myMessage).animate({
				opacity:1
				},1000);
			}
		});
	});*/


		$(window).scroll(function(){
		$('.box').each(function(){
		var elem1 = $(this);
		var myMessage = $('h1');
			if(inView(elem1)){
				$(this).find(myMessage).animate({
				opacity:1
				},1000);
			}
		});


	//robot heart fill

		$('#fill_container').each(function(){
			
		var container = $(this);
		var fill = $('#fill');
			if(inView(container)){
				$(this).find(fill).animate({
				top: '0px',
				height : '90px'
				},1000);
			} 
		});

	//root to tree

		$('#root_container').each(function(){
			
		var container = $(this);
		var fill = $('#root');
			if(inView(container)){
				$(this).find(fill).animate({
				top: '0px',
				height : '233px'
				},1000, 'linear');
			} 
		});
});

   // iPad or iPhone
var userAgent = navigator.userAgent;

if (!userAgent.match(/iPad/i) || !userAgent.match(/iPhone/i)) {



	// parallax scrolling for 2002
	$('#kite').scrollingParallax({
		enableHorizontal : true,
        enableVertical : false,
        staticScrollLimitX : false,
        staticSpeedX : .85,
        appendInFront : true
	});
	$('#sunset').scrollingParallax({
		enableHorizontal : true,
        enableVertical : false,
        staticScrollLimitX : false,
        staticSpeedX : .6,
        appendInFront : true
	});

	// parallax scrolling for 2011


	$('#sun').scrollingParallax({
		enableHorizontal : true,
        enableVertical : false,
        staticScrollLimitX : false,
        staticSpeedX : .8,
        appendInFront : true
	});

	// parallax scrolling for 2012


	$('#rocket').scrollingParallax({
		enableHorizontal : true,
        enableVertical : false,
        staticScrollLimitX : false,
        staticSpeedX : .7,
        appendInFront : true
	});
	$('#stars1').scrollingParallax({
		enableHorizontal : true,
        enableVertical : false,
        staticScrollLimitX : false,
        staticSpeedX : .86,
        appendInFront : true
	});
	$('#stars2').scrollingParallax({
		enableHorizontal : true,
        enableVertical : false,
        staticScrollLimitX : false,
        staticSpeedX : .8,
        appendInFront : true
	});


	// parallax scrolling for 2008


	$('#websites').scrollingParallax({
		enableHorizontal : true,
        enableVertical : false,
        staticScrollLimitX : false,
        staticSpeedX : .72,
        appendInFront : true
	});
}
});
