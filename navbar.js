$("document").ready(function(){
	$("#claim").click(function(){
if ($("#invi").css("display") === "none") {
	$("#invi").removeClass("dop");
	$("#invi").addClass("pop");
}
else {
	$("#invi").removeClass("pop");
	$("#invi").addClass("dop");
}

	})

})