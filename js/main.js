gsap.registerPlugin(ScrollTrigger);


//***********************//
//****** JS PAGE ********//
//***********************//

document.querySelector('.img-logo-menu').addEventListener('click', reloadPage);
document.querySelector('.menu-hamburger').addEventListener('click', menuResponsive);

function reloadPage() {
  console.log('reload');
  window.location.reload()
}

function menuResponsive() {
  document.querySelector('#ligne-hamburger-3').style.opacity = 0;
  document.querySelector('#ligne-hamburger-1').style.transform = 'translate(0px, 7px) rotate(45deg)';
  document.querySelector('#ligne-hamburger-2').style.transform = 'translate(0px, -7px) rotate(-45deg)';
  document.querySelector('#ligne-hamburger-1').style.transition = '0.3s';
  document.querySelector('#ligne-hamburger-2').style.transition = '0.3s';

  document.querySelector('.gabarit-int').style.filter = 'blur(10px)';
  document.querySelector('.gabarit-int').style.position = 'fixed'; //MARCHE PAS
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

gsap.fromTo(".formation-container", {
  //xPercent: 55,
  },
  {
  xPercent: -100, 
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".formation-container",
    start: "center 70%",
    end: () => innerWidth * 2,
    scrub: true,
    pin: ".gabarit",
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