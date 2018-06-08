$(function () {
	$(".uitem").eq(0).show();
	$(".title").find("b").not(":eq(0)").text("+");
	$(".litem .title").click(function(){
		$(".uitem").slideUp();
		if($(this).next().is(":visible")){
			$(this).next().slideUp();
			$(this).find("b").text("+");
		}else{
			$(this).next().slideDown();
			$(".title").find("b").text("+");
			$(this).find("b").text("-");
			}
		})
	
	/*$(".i-litem").eq(0).slideDown();
	$("a").find("b").not(":eq(0)").text("+");
	$(".m-litem a").click(function(){
		$(".i-litem").slideUp();
		if($(this).next().is(":visible")){
			$(this).next().slideUp();
			$(this).find("b").text("+");
			}else{
			$(this).next().slideDown();
			$("a").find("b").text("+");
			$(this).find("b").text("-");
			}
		})*/
	
	
})
