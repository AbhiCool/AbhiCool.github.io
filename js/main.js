$(document).ready(function() {
  $('.nav li').click(function(event) {
    event.preventDefault();
    $('.nav li').removeClass('active');
    $(this).addClass('active');

    var $section = $($(this).find('a').attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top - 50
    }, 800);
  });

  // When the user clicks on scrollToTopBtn button, scroll to the top of the document
  $('.scrollToTopBtn').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });

  $('.feedbackForm').on("submit", function(e) {
    e.preventDefault();
  });

  $('.feedbackForm').on("click", '.clearBtn', function(e) {
    e.preventDefault();

    $('.feedbackForm')[0].reset();
  });

  $(function(){ 
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
  });
});// End of document.ready


// When the user scrolls down 20px from the top of the document, show the button
$(window).on('scroll', function() {
  scrollFunction();
  function scrollFunction() {
    //Get the button:
    var scrollToTopBtn = $(".scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.show();
      return;
    }
    scrollToTopBtn.hide();

  }
}); // End of window scroll event