$(document).ready(function() {
  var $inventory = $('#inventory tbody');
  var quantities = $inventory.find('td:nth-child(2)')
  .map(function(index, qty) {
    return $(qty).text();
  }).get();
  var sum = $.sum(quantities);
  $('#sum').find('td:nth-child(2)').text(sum);
});