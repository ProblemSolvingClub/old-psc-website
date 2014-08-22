$(document).ready(function() {
	$('#ccpc').click(toggle);
	$('#acpc').click(toggle);
	$('#worldFinals').click(toggle);
	$('#ccpc2013').click(toggle);
});

function toggle() {
	var dropdown = "#";
	dropdown += this.id;
	var temp = dropdown;
	dropdown += "DropDown";
	if( $(temp).hasClass("roundedBottomCorners") == false) {
		$(temp).addClass("roundedBottomCorners");
		$(temp).css("margin-bottom", "1px");
		$(dropdown).slideToggle(100);
	}
	else {
		$(dropdown).slideToggle(50);
		$(temp).removeClass("roundedBottomCorners");

	}	
}