$(document).ready(function() {
$('.nav-tabs a').click(function (e) {
  e.preventDefault();
 $(this).tab('show')
  console.log($(this).html());
  $('#monday').load('monday');
  $('#tuesday').load('tuesday');
  $('#wednesday').load('wednesday');
  $('#thursday').load('thursday');
  $('#friday').load('friday');
});
});
 $(function () {
    $('#monday a:last').tab('show')
  })
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
