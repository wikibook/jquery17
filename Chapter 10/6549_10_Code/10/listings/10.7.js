(function($){
  $('div.photo').live('mouseenter mouseleave', function(event) {
    var $details = $(this).find('.details');
    if (event.type == 'mouseenter') {
      $details.fadeTo('fast', 0.7);
    } else {
      $details.fadeOut('fast');
    }
  });

  $(document).ready(function() {
    var pageNum = 1;
    $('#more-photos').click(function() {
      var $link = $(this);
      var url = $link.attr('href');
      if (url) {
        $.get(url, function(data) {
          $('#gallery').append(data);
        });
        pageNum++;
        if (pageNum < 20) {
          $link.attr('href', 'pages/' + pageNum + '.html');
        }
        else {
          $link.remove();
        }
      }
      return false;
    });
  });
})(jQuery);
