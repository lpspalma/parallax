// JavaScript Document
$(document).ready(function(){
		$(".slide").slick({
			slidesToShow:4,
			slidesToScroll:1,
			autoplay:true,
			dots:true,
			responsive:[
				{
				breakpoint:1200,
				settings:{
					slidesToShow:3,
					slidesToScroll:1,
					autoplay:true,
					dots:true,}
				},
				{
				breakpoint:600,
				settings:{
					slidesToShow:2,
					slidesToScroll:1,
					autoplay:true,
					dots:true,}
				}
			]
		})
	//--------------------------------
	$(".main").click(function(){
		$(".submenu").animate({ //varia o tamanho do menu
			height:"toggle"
		},500)
	})
})
