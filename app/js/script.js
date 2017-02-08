
var nav = document.getElementsByTagName('nav')[0];
var scrollBtn = document.getElementsByClassName('navigationFaIcon'); 
var logo = document.getElementsByClassName('logo');
var scrollTimer;
var counter = 0;
var navigationList = document.getElementsByClassName('navigationList');
var sections = document.getElementsByTagName('section'); 
var sectionAdvertising = document.getElementsByClassName('advertising')[0]; 
var sectionMarketing = document.getElementsByClassName('marketing')[0]; 
var quote = document.getElementsByClassName('quote')[0]; 
var humburgerNavbar = document.getElementById('humburgerNavbar'); 



window.onload = function() {
    
    window.onresize = function(){
        if(window.innerWidth > 1000) {
            humburgerNavbar.style.display = 'flex'
        }else {
            humburgerNavbar.style.display = 'none'
        }

    }


        
    window.onscroll = function() {
        navbarColor();
    };

    function navbarColor() {
        if(document.body.scrollTop >= 0 & document.body.scrollTop < 1340){
            nav.style.backgroundColor = '#252121';
        }else if(document.body.scrollTop > 1340 & document.body.scrollTop < 2020){
            nav.style.backgroundColor = '#2b4151';
        }else if(document.body.scrollTop > 2020 & document.body.scrollTop < 2860){
            nav.style.backgroundColor = '#252121';
        }
    }

  

    function scrollTop(maxValue){
        counter = 10 + window.pageYOffset;
        document.body.scrollTop = counter;
        if(counter > maxValue){
            clearInterval(scrollTimer);
            counter = window.pageYOffset;
        }
    }

    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }



    scrollBtn[0].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sections[0]).top - 70]);
    }

    scrollBtn[1].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sections[1]).top - 70]);
    }

    scrollBtn[2].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sections[2]).top - 70]);
    }

    scrollBtn[3].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sections[3]).top - 70]);
    }

    scrollBtn[4].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sectionAdvertising).top - 70]);
    }

    scrollBtn[5].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sectionMarketing).top - 70]);
    }

    scrollBtn[6].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sections[4]).top - 70]);
    }

    scrollBtn[7].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(sections[5]).top - 70]);
    }

    scrollBtn[8].onclick = function() {
        scrollTimer = setInterval(scrollTop, 1, [getCoords(quote).top - 70]);
    }


    logo[0].onclick = function() {
        document.location = 'index.html'
    }
    logo[1].onclick = function() {
        document.location = 'index.html'
    }

    $('#humburgerIcon').click(function(){
        $('#humburgerNavbar').toggle()
    })
    $('#humburgerIcon').mouseover(function(){
        $(this).css('cursor', 'pointer')
    })



$('.owl-carousel:eq(0)').owlCarousel({
    center: true,
    items:3,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        650:{
            items:3
        }
    }
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})



}