$(document).ready(function(){
	var n=0
$(".qiu").click(function(){
	n++
    if(n%2==0){
    	$(".smq").animate({left:'0rem'},"3000");
		$(".qiu").css("background-color","#fff");
    }else{
    	$(".smq").animate({left:'1.16rem'},"3000");
		$(".qiu").css("background-color","#286EF0");
    }
		

});
$(".more").click(function(){
	n++
	if(n%2==0){
		$(".nav-two").fadeOut();
		$(".nav-two").css("display","");
	}else{
		$(".nav-two").fadeIn();
		$(".nav-two").css("display","block");
	}
	
})
})