$(document).ready(function() {
$('.nav-tabs a').click(function (e) {
  e.preventDefault();
 $(this).tab('show')
  console.log($(this).html());
  $('#monday').load('monday.erb');
  $('#tuesday').load('tuesday.erb');
  $('#wednesday').load('wednesday.erb');
  $('#thursday').load('thursday.erb');
  $('#friday').load('friday.erb');
});
});
 $(function () {
    $('#monday a:last').tab('show')
  })
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
