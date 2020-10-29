$(document).ready(function() {https://clck.ru/F5MdE
   $('.menu_but').click(function()
   {
   	$('.nav_menu_list').slideToggle(350,function()
   		{
   			if($(this).css('display')==='none')
				{
					$(this).removeAttr('style');
				}
   		});
   })
});


$('.grid').masonry({
	// options...
	itemSelector: '.block_3_item',
	columnWidth: '.block_3_item',
	gutter: 10
  });


$(document).ready(function() {
    $(".fancybox").fancybox({
    	    "imageScale"            : false,
            "zoomOpacity"			: true,
            "overlayShow"			: false,
            "zoomSpeedIn"			: 500,
            "zoomSpeedOut"			: 500
    });
});


$(function()
{

	var btnUp = $(".but_up");

	var top = $(this).scrollTop();
		if( top > 300 ){
			btnUp.fadeIn(500);
		}
		else
		{
			btnUp.fadeOut(500);
		}

		
	$(document).on("scroll",function()
	{
		var top = $(this).scrollTop();
		if( top > 300 ){
			btnUp.fadeIn(500);
		}
		else
		{
			btnUp.fadeOut(500);
		}
	});

	btnUp.on("click",function()
	{
		$("html,body").animate({
			scrollTop:0
		},400);
	});
});


$(".link").on("click",function(e)
	{
		e.preventDefault();

		var selector = $(this).attr("href"); //получили Атрибут
		var h = $(selector);  //получили элемент с данным атрибутом
		

		$("html,body").animate({
			scrollTop: h.offset().top //мы скролим тег body на высоту h.offset(высоту получаем при клике на элемент меню).top
		},500)
	});


$(document).ready(function() {
  new WOW().init();
});


$(document).ready(function() {

	$('.count_num_1').countTo({
        from: 0,
        to: 112,
		speed: 9000,
	});

	
	$('.count_num_2').countTo({
        from: 0,
        to: 97,
        speed: 9000,
	});
	
	$('.count_num_3').countTo({
        from: 0,
        to: 35,
        speed: 9000,
	});
	
	$('.count_num_4').countTo({
        from: 0,
        to: 44,
        speed: 9000,
	});
	
	
 });