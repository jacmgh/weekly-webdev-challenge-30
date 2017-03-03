// Hamburger button
$('.navbar-hamburger').on('click', function () {
    $(this).toggleClass('navbar-hamburger-active');
    $('.navbar .navbar-item').toggleClass('navbar-item-active');
});
