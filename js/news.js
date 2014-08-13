$(document).ready(function() {
	$('#ccpc').click(toggle);
	$('#acpc').click(toggle);
	$('#worldFinals').click(toggle);
});

function toggle() {
	var dropdown = "#";
	dropdown += this.id;
	dropdown += "DropDown";
	$(dropdown).slideToggle(100);
}