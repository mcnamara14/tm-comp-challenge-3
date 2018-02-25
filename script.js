$('.top-menu').on('click', toggleSidebar); 

function toggleSidebar() {
  $('aside').animate({width: 'toggle'}, 350);
  if ($('.account-name a:first').text() === 'Bojack Horseman') {
    console.log('1st')
    $('.account-name a:first').text('Bojack');
  } else {
    console.log('2nd')
    $('.account-name a:first').text('Bojack Horseman');
  }
};
