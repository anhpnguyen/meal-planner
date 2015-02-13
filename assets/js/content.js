$(function(){
	load_monday();
	load_tuesday();
});
$('.nav-tabs a').click(function(e) {
	function load_monday(){
	$("#monday").load("monday.html", function())
}
function load_tuesday(){
	$("#tuesday").load("tuesday.html", function())
}
});