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
    $('#navbarMenu').removeClass('show'); //remove the backdrop

    $('html, body').animate({scrollTop: 0}, 800);

});

$('#about__navbar').click(() =>{
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var aboutEl = $('.main__content--about');
    var aboutElOffset = aboutEl.offset().top - 85;
   
    
    $('html, body').animate({scrollTop: aboutElOffset}, 800);
});


$('#skills__navbar').click(() =>{
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var skillsOffset = $('.main__content--skills').offset().top - 85;
    $('html, body').animate({scrollTop: skillsOffset}, 800);
});

$('#history__navbar').click(() =>{
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var historyOffset = $('.main__content--studies').offset().top - 85;
    $('html, body').animate({scrollTop: historyOffset}, 800);
});


$('#contact__navbar').click(() =>{
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var contactOffset = $('.main__content--contact').offset().top - 85;
    $('html, body').animate({scrollTop: contactOffset}, 800);
});