// function scrollHeader(){
//     const header = document.getElementById('header')
//     // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

var swiper = new Swiper(".imgswiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });


  var swiper = new Swiper(".infoswiper", {
    grabCursor: true,
    loop: true,
    direction: "vertical",
    effect: "slide",
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });


document.addEventListener(
  "play",
  function (e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);

imgswiper.controller.control = this.infoswiper;

(function setGlowEffectRx() {
    const glowEffects = document.querySelectorAll(".glow-effect");
  
    glowEffects.forEach((glowEffect) => {
      const glowLines = glowEffect.querySelectorAll("rect");
      const rx = getComputedStyle(glowEffect).borderRadius;
  
      glowLines.forEach((line) => {
        line.setAttribute("rx", rx);
      });
    });
  })();