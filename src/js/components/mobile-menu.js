// Hamburger button
$hamburger = $('.navbar-hamburger');

// Mobile menu dim box
$dim = $('.navbar-dim');

// Listeners
$dim.on('click', toggleMenu);
$hamburger.on('click', toggleMenu);
$('.navbar-menu').on('click', '.navbar-item', toggleMenu);

function toggleMenu() {
    $hamburger.toggleClass('navbar-hamburger-active');
    $dim.toggleClass('navbar-dim-active');
    $('.navbar .navbar-item').toggleClass('navbar-item-active');
}
