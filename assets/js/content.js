$(document).ready(function() {
$('.nav-tabs a').click(function (e) {
  e.preventDefault();
 $(this).tab('show')
  console.log($(this).html());
  $('#monday').load('monday.html');
  $('#tuesday').load('tuesday.html');
  $('#wednesday').load('wednesday.html');
  $('#thursday').load('thursday.html');
  $('#friday').load('friday.html');
});
});
 $(function () {
    $('#monday a:last').tab('show')
  })
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
