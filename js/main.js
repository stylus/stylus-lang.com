$(function() {

  $('h1').add('h2').add('h3').each(function() {
    $(this).append('<span class="permalink"><a href="' + location.href + '#' + $(this).attr('id') + '">#</a></span>');
  });

});
