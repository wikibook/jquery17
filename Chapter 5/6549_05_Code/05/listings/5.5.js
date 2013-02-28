$(document).ready(function() {
  // Use attr() to add an id, rel, and title.
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function() {
      //return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
      return '위키피디아에서 ' + $(this).text() + '에 대한 자세한 정보보기';
    },
    id: function(index, oldValue) {
      return 'wikilink-' + index;
    }
  });
});
