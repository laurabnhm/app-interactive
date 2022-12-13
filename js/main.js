gsap.registerPlugin(ScrollTrigger);


//***********************//
//****** JS PAGE ********//
//***********************//

let menu_count_click = 0;

document.querySelector('.img-logo-menu').addEventListener('click', reloadPage);
document.querySelector('.menu-hamburger').addEventListener('click', menuResponsive);

function reloadPage() {
  console.log('reload');
  window.location.reload()
}

function menuResponsive() {
  menu_count_click++;
  console.log(menu_count_click);

  if (menu_count_click %2 == 1 ) {
    afficheMenu();
    console.log('afficheMenu');
  }

  else {
    effaceMenu();
    console.log('effaceMenu');
  }
};

function afficheMenu() {
  document.querySelector('#ligne-hamburger-3').style.opacity = 0;
  document.querySelector('#ligne-hamburger-1').style.transform = 'translate(0px, 7px) rotate(45deg)';
  document.querySelector('#ligne-hamburger-2').style.transform = 'translate(0px, -7px) rotate(-45deg)';
  document.querySelector('#ligne-hamburger-1').style.transition = '0.3s';
  document.querySelector('#ligne-hamburger-2').style.transition = '0.3s';
  document.querySelector('#ligne-hamburger-3').style.transition = '0.3s';

  document.querySelector('.menu-hamburger-open').style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';
  
  document.querySelector('.section-presentation').style.display = 'none';
  document.querySelector('.separation').style.display = 'none';
  document.querySelector('.section-formation').style.display = 'none';
  document.querySelector('.section-a-la-une').style.display = 'none';
  document.querySelector('.section-projets').style.display = 'none';
  document.querySelector('.section-contact').style.display = 'none';
}

function effaceMenu() {
  document.querySelector('#ligne-hamburger-3').style.opacity = 1;
  document.querySelector('#ligne-hamburger-1').style.transform = 'translate(0px, 0px) rotate(0deg)';
  document.querySelector('#ligne-hamburger-2').style.transform = 'translate(0px, 0px) rotate(0deg)';
  document.querySelector('#ligne-hamburger-1').style.transition = '0.3s';
  document.querySelector('#ligne-hamburger-2').style.transition = '0.3s';
  document.querySelector('#ligne-hamburger-3').style.transition = '0.3s';

  document.querySelector('.menu-hamburger-open').style.display = 'none';
  document.querySelector('body').style.overflow = 'scroll';
  document.querySelector('body').style.overflowX = 'hidden';

  document.querySelector('.section-presentation').style.display = 'flex';
  document.querySelector('.separation').style.display = 'flex';
  document.querySelector('.section-formation').style.display = 'flex';
  document.querySelector('.section-a-la-une').style.display = 'flex';
  document.querySelector('.section-projets').style.display = 'flex';
  document.querySelector('.section-contact').style.display = 'flex';
}


//***********************//
//******** GSAP *********//
//***********************//


// PRESENTATION
gsap.from('.img-illustration-laura', {opacity:0, scale:0.7, duration:1.5, ease: "power4.out", delay:0.8});
gsap.from('.img-laura-bonhomme', {opacity:0, yPercent:10, duration:1.5, ease: "power4.out", delay:0.8});
gsap.from('.txt-jobs', {opacity:0, yPercent:10, duration:1.5, ease: "power4.out", delay:1.2});
gsap.from('.ligne', {opacity:0, scale:0, duration:1.5, ease: "power4.out", delay:1.6});
gsap.from('#bouton-voir-presentation', {opacity:0, yPercent:10, duration:1.5, ease: "power4.out", delay:2});


// FORMATION
/*gsap.from(".formation-title", {
  scrollTrigger: {
    trigger: ".formation-title",
    toggleActions: "restart none none none",
    start: "center 70%",
  },
  yPercent: 15,
  duration: 3,
  opacity: 0,
  ease: "power4.out",
});*/

gsap.to(".formation-container", 
  {
  xPercent: -100, 
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".formation-container",
    start: "center 70%",
    scrub: true,
    pin: ".gabarit-int",
    invalidateOnRefresh: true,
    anticipatePin: 1,
  }
});


// PROJETS À LA UNE
gsap.to("#parallax-box-1", {
  y: -300,
  ease: "none",
  scrollTrigger: {
    //trigger: ".a-la-une-container",
    markers: {startColor: "blue", endColor: "red", fontSize: "12px"}, 
    start: "center center",
    toggleActions: "play none none reverse",
    scrub: 1,
  }, 
});

gsap.to("#parallax-box-2", {
  y: 250,
  ease: "none",
  scrollTrigger: {
    //trigger: ".a-la-une-container",
    start: "center center",
    toggleActions: "play none none reverse",
    scrub: 1,
  }, 
});

gsap.to("#parallax-box-3", {
  y: 00,
  ease: "none",
  scrollTrigger: {
    //trigger: ".a-la-une-container",
    start: "center center",
    toggleActions: "play none none reverse",
    scrub: 1,
  }, 
});

gsap.to("#bouton-voir-projets-1", {
  y: -150,
  ease: "none",
  scrollTrigger: {
    //trigger: ".a-la-une-container",
    start: "center center",
    toggleActions: "play none none reverse", 
    scrub: 1,
  }, 
});


// PROJETS
gsap.from('#ligne-projets-1', {
  xPercent: -100,
  ease: "none", 
  scrollTrigger: {
    start: "center center",
    end: "+=1900",
    toggleActions: "play none none reverse", 
    scrub: 1,
  }
});

gsap.from('#ligne-projets-2', {
  xPercent: -100,
  ease: "none", 
  scrollTrigger: {
    start: "center center",
    end: "+=2200",
    toggleActions: "play none none reverse", 
    scrub: 1,
  }
});

// CONTACT
gsap.from('.img-cv', {
  scale: 0,
  ease: "none", 
  scrollTrigger: {
    start: "center center",
    end: "+=2900",
    toggleActions: "play none none reverse", 
    scrub: 1,
  }
});

/*gsap.from('#icon-rs-insta', {
  scale: 0,
  ease: "none", 
  scrollTrigger: {
    start: "center center",
    end: "+=3200",
    toggleActions: "play none none reverse", 
    scrub: 1,
  }
});

gsap.from('#icon-rs-linkedin', {
  scale: 0,
  ease: "none", 
  scrollTrigger: {
    start: "center center",
    end: "+=3200",
    toggleActions: "play none none reverse", 
    scrub: 1,
  }
});

gsap.from('.txt-mail', {
  scale: 0,
  ease: "none", 
  scrollTrigger: {
    start: "center center",
    end: "+=3200",
    toggleActions: "play none none reverse", 
    scrub: 1,
  }
});*/