$(function() {
    // let paragrafy = $('p');

    // paragrafy.text('Andrzej przynieś kole'); // dodaj tekst - jakby nie było tekstu to by wyświetliło zawartość

    // $('span').html('<a href="#">link</a>');

    // console.log(paragrafy.text);

    // $('span').prepend('    Apendujemy tekst !'); 
    // $('span').append('Apendujemy tekst !   '); 

    // $('span').before('before text'); 
    // $('span').after('after text'); 

    // $('#naglowek-1').empty();
    // $('#naglowek-1').remove();
    // $('#naglowek-1').css('background-color', 'yellow');
    // $('#naglowek-1').css({color: 'red', 'text-decoration':'underline'});

    // $('input#input-value').val('TADAMTURURU');

    // $('#par-container').find('.paragraf').css('background-color', 'red');

    $('p').each(function(index, element) {
        console.log($(this)); // === console.log(element)
        
        console.log('Element ' + index + ':' + $(element).text());
        
    });



});