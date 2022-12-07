gsap.registerPlugin(ScrollTrigger);


//***********************//
//****** JS PAGE ********//
//***********************//

document.querySelector('.img-logo-menu').addEventListener('click', reloadPage);

function reloadPage() {
  console.log('reload');
  window.location.reload()
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
/*let width_container_formation = document.querySelector(".formation-container");
gsap.to(".section-formation", {
  scrollTrigger: {
    trigger: ".section-formation",
    pin: true,
    end: () => width_container_formation.scrollWidth,
    markers: true,
  }
})*/

gsap.from(".formation-title", {
  scrollTrigger: {
    trigger: ".formation-title",
    toggleActions: "restart none none reverse",
    markers: true,
    start: "center 70%",
  },
  yPercent: 15,
  duration: 3,
  opacity: 0,
  ease: "power4.out",
});

gsap.fromTo(".formation-container", {
  xPercent: 55,
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
    markers: false,
    anticipatePin: 1,
  }
});


/*
let formation_timeline = gsap.timeline(scrollTimeline);
formation_timeline.from(".formation-1", {opacity:0, yPercent:15, duration:1, ease:"power4"}),
formation_timeline.from("#inter-ligne-lycee-prepa", {opacity:0, scale:0, duration:1, ease:"power4"}),
formation_timeline.from(".formation-2", {opacity:0, yPercent:15, duration:1, ease:"power4"}),
formation_timeline.from("#inter-ligne-prepa-bts", {opacity:0, scale:0, duration:1, ease:"power4"}),
formation_timeline.from(".formation-3", {opacity:0, yPercent:15, duration:1, ease:"power4"}),
formation_timeline.from("#inter-ligne-bts-inge", {opacity:0, scale:0, duration:1, ease:"power4"}),
formation_timeline.from(".formation-4", {opacity:0, yPercent:15, duration:1, ease:"power4"}),
formation_timeline.from("#inter-ligne-inge-canada", {opacity:0, scale:0, duration:1, ease:"power4"}),
formation_timeline.from(".formation-5", {opacity:0, yPercent:15, duration:1, ease:"power4"});

function scrollTimeline() {
  ScrollTrigger.create({
    animation: formation_timeline,
    trigger:".formation-container",
    markers: true,
    start: "center 80%",
    toggleActions: "restart restart none none",
  }),
  ScrollTrigger.create({
    trigger:".section-formation",
    end: "center 50%",
    pin: true,
  })
};*/