// JavaScript Document

//----------------------------criando menu fixo---------------------
$(document).ready(function(){
	var tamanhotela = $(window).height()  //pega o tamanho da tela do usuario
	$(window).scroll(function(){  //a funcao é ativada quando rolar a pagina
		if($(this).scrollTop() > tamanhotela-60){
			$("header").addClass("menufixo")
		}else{
			$("header").removeClass("menufixo")
		}
		
	})
	$("#pag1").click(function(){
		$("html, body").animate({
			scrollTop:0
		},2000)
	})
		$("#pag2").click(function(){
		$("html,body").animate({
			scrollTop:$("#sobre").offset().top
		},2000)
})
		$("#pag3").click(function(){
		$("html,body").animate({
			scrollTop:$("#habilidades").offset().top
		},2000)
})
		$("#pag4").click(function(){
		$("html,body").animate({
			scrollTop:$("#portifolio").offset().top
		},2000)
})
		$("#pag5").click(function(){
		$("html,body").animate({
			scrollTop:$("#contatos").offset().top
		},2000)
})

})





//-----------------------------------animando as habilidades-------------------
$(document).ready(function(){
	var tamanhotela = $(window).height()
	$(window).scroll(function(){
		if ($(this).scrollTop()> tamanhotela*2){
			$("#habilidades .html5").addClass("animahtml5")
			$("#habilidades .css3").addClass("animacss3")
			$("#habilidades .jquery").addClass("animajquery")
			$("#habilidades .front").addClass("animafront")
			$("#habilidades .photoshop").addClass("animaphotoshop")
			$("#habilidades .illustrator").addClass("animaillustrator")
		}else{
			$("#habilidades .html5").removeClass("animahtml5")
			$("#habilidades .css3").removeClass("animacss3")
			$("#habilidades .jquery").removeClass("animajquery")
			$("#habilidades .front").removeClass("animafront")
			$("#habilidades .photoshop").removeClass("animaphotoshop")
			$("#habilidades .illustrator").removeClass("animaillustrator")
		}
	})
})

