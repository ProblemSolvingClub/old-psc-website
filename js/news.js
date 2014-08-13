$(document).ready(function() {
	$('#ccpc').click(toggle);
});

function toggle() {
	var dropdown = "#";
	dropdown += this.id;
	dropdown += "DropDown";
	$(dropdown).slideToggle(100);
}