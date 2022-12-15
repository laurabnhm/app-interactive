gsap.registerPlugin(ScrollTrigger);

//-----------------------//
//         GSAP          //
//-----------------------//

/*****************************************/
/************ PRÉSENTATION ***************/
/*****************************************/

gsap.from('.img-illustration-laura', {
  opacity: 0,
  scale: 0.7,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.8
});

gsap.from('.img-laura-bonhomme', {
  opacity: 0,
  yPercent: 10,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.8
});

gsap.from('.txt-jobs', {
  opacity: 0,
  yPercent: 10,
  duration: 1.5,
  ease: "power4.out",
  delay: 1.2
});

gsap.from('.ligne', {
  opacity: 0,
  scale: 0,
  duration: 1.5,
  ease: "power4.out",
  delay: 1.6
});

gsap.from('#bouton-voir-presentation', {
  opacity: 0,
  yPercent: 10,
  duration: 1.5,
  ease: "power4.out",
  delay: 2
});


/*****************************************/
/************** FORMATION ****************/
/*****************************************/

const media_query_1150 = window.matchMedia('(max-width: 1150px)');
media_query_1150.addListener(gsapFormation);
gsapFormation(media_query_1150);

function gsapFormation(e) {
  if (e.matches) {
  } 
  else {
    gsap.to(".formation-container", {
      xPercent: -100,
      x: () => innerWidth,
      ease: "none",
      scrollTrigger: {
        markers: {
          startColor: "blue",
          endColor: "cyan",
          fontSize: "12px"
        },
        trigger: ".formation-container",
        start: "center 70%",
        scrub: true,
        pin: ".gabarit-int",
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    })
  }
}


/*****************************************/
/*********** PROJETS À LA UNE ************/
/*****************************************/

const media_query_1023 = window.matchMedia('(max-width: 1023px)');
media_query_1023.addListener(gsapALaUne);
gsapALaUne(media_query_1023);

function gsapALaUne(e) {
  if (e.matches) {
  } 
  else {
    gsap.to("#parallax-box-1", {
      y: -300,
      ease: "none",
      scrollTrigger: {
        markers: {
          startColor: "red",
          endColor: "pink",
          fontSize: "12px"
        },
        //trigger: ".a-la-une-container",
        start: "center center",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
    
    gsap.to("#parallax-box-2", {
      y: 200,
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
  }
}

/*****************************************/
/************* COMPÉTENCES ***************/
/*****************************************/

/******** SKILLS MEDIA QUERY TAB *********/
const media_query_1024 = window.matchMedia('(max-width: 1024px)');
media_query_1024.addListener(gsapProjetsTablette);
gsapProjetsTablette(media_query_1024);

function gsapProjetsTablette(e) {
  if (e.matches) {
    gsap.from('#ligne-projets-1', {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        start: "center center",
        end: "+=650",
        toggleActions: "play none none reverse",
        scrub: 1,
      }
    });
    
    gsap.from('#ligne-projets-2', {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        start: "center center",
        end: "+=850",
        toggleActions: "play none none reverse",
        scrub: 1,
      }
    });
  } 
  else {
    gsapProjetsOrdi();
  }
}

/******** SKILLS MEDIA QUERY TEL *********/
/*const media_query_500 = window.matchMedia('(max-width: 500px)');
media_query_500.addListener(gsapProjetsPhone);
gsapProjetsPhone(media_query_500);

function gsapProjetsPhone(e) {
  if (e.matches) {
  } 
  else {
    gsapProjetsOrdi();
  }
}*/

/******** SKILLS MEDIA QUERY ORDI *********/
function gsapProjetsOrdi() {
  gsap.from('#ligne-projets-1', {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      start: "center center",
      end: "+=1300",
      toggleActions: "play none none reverse",
      scrub: 1,
    }
  });
  
  gsap.from('#ligne-projets-2', {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      start: "center center",
      end: "+=1500",
      toggleActions: "play none none reverse",
      scrub: 1,
    }
  });
}


/*****************************************/
/**************** CONTACT ****************/
/*****************************************/

gsap.from('.img-cv', {
  scale: 0,
  ease: "none",
  scrollTrigger: {
    start: "center center",
    end: "+=2300",
    toggleActions: "play none none reverse",
    scrub: 1,
  }
});