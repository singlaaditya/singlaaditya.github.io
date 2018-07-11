$("document").ready(function(){
$("#bt").click(function(){
	if ($("#col").css('display') === "none") {
$('#col').removeClass("ini");
$("#col").addClass("display_collapse");
}
else {
	$('#col').removeClass("display_collapse");
$("#col").addClass("ini");
}
})

})