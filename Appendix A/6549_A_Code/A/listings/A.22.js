$.print = function(message) {
  $(document).ready(function() {
    $('<div class="result"><div>')
      .text(String(message))
      .appendTo('#results');
  });
};

function outerFn() {
  var outerVar = {};
  function innerFn() {
    $.print('hello');
  }
  outerVar.fn = innerFn;
  return innerFn;
};
