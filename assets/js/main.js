function ShowMenu(toggleId, menuId){
 const toggle = document.getElementById(toggleId);
 const menu = document.getElementById(menuId);
 if(toggle && menu){
     toggle.addEventListener('click', function(){
         menu.classList.toggle('active');
     })
 }
}
ShowMenu('burger', 'menu')


const heroSlider = new Swiper('.hero_container',{
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,
    grabCursor: true,
    effect: 'cube',
   
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset:20,
        shadowScale: 0.9,
    },

    keyboard: {
        enable: true,
    },
    navigation: {
        prevEl: '.arrow-left',
        nextEl: '.arrow-right',
    },
   
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    
});

const brawlStars = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 500,
}) 

brawlStars.reveal('.item-shop',{
    origin: 'bottom',
    interval: 200,
})