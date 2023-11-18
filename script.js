// Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // Active link switching
  $(window).on('scroll', function() {
    $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top - 200) {
        var id = $(this).attr('id');
        $('nav a').removeClass('active');
        $('nav a[href="#' + id + '"]').addClass('active');
      }
    });
  });
  