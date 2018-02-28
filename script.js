$('.top-menu').on('click', toggleSidebar);
$('.close-nav').on('click', toggleSidebar);
$('.top-menu').on('click', hideContainer);  
$('.close-nav').on('click', hideContainer);

function toggleSidebar() {
  $('aside').animate({width: 'toggle'}, 350);
  $('.close-nav').toggle('slow');
};

function hideContainer() {
    if (window.matchMedia('(max-width: 675px)').matches) {
        $('.container').toggle();
    }
}

