$(window).scroll(() =>{
    if( $(this).scrollTop() > 40 ){
        $('#top-scroller').fadeIn();
    }else{
        $('#top-scroller').fadeOut();
    }
});

$('#top-scroller').click(() => {
    $('html, body').animate({scrollTop: 0 }, 800 );
});

$('#home__navbar').click(() =>{
    event.preventDefault();
    console.log('test');
    $('#navbarMenu').removeClass('show');
    $('html, body').animate({scrollTop: 0}, 800);
});

$('#about__navbar').click(() =>{
    event.preventDefault();
    console.log('test');
    $('#navbarMenu').removeClass('show');
    $('html, body').animate({scrollTop: 602}, 800);
});


$('#skills__navbar').click(() =>{
    event.preventDefault();
    console.log('test');
    $('#navbarMenu').removeClass('show');
    $('html, body').animate({scrollTop: 1265}, 800);
});


$('#contact__navbar').click(() =>{
    event.preventDefault();
    console.log('test');
    $('#navbarMenu').removeClass('show');
    $('html, body').animate({scrollTop: 2000}, 800);
});