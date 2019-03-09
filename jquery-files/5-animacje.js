// $('#naglowek-1').hide(3000);
// $('#naglowek-1').show(3000);

// $('#naglowek-1').fadeOut(3000);
// $('#naglowek-1').fadeIn(3000);

// $('#naglowek-1').fadeIn(3000);
// $('#naglowek-1').fadeIn(3000);

let naglowek2 = $('#naglowek-2');





function bogdan() {
    console.log('trzecia!');

    naglowek2.animate({
        fontSize: '2em',
        marginLeft: '700px',
        marginTop: '100px'
    }, 800, customAnimate);
    
}

function customAnimate() {
    console.log('druga animacja');
    
    naglowek2.animate({
        fontSize: '5em',
        marginLeft: '200px'
    }, 1000, andrzej);
}

customAnimate();

function andrzej() {
    console.log('pierwsza');
    
    naglowek2.animate({
    fontSize: '4em', 
    marginLeft: '400px',
    marginTop: '380px'
}, 1500, bogdan);
}