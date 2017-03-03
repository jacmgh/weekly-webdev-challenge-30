var $navbar = $('.navbar');

// Change navbar height on scroll
$(window).on('scroll', function () {

    var top = $(this).scrollTop();

    if (top > 80) {
        $navbar.addClass('navbar-scroll');
    } else {
        $navbar.removeClass('navbar-scroll');
    }

});

// Navbar links
// Add click listener to links starting with '#'
$navbar.find('a[href^="#"]').on('click', function (e) {

    // Cancel default action
    e.preventDefault();

    // Animate scroll
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);

});
