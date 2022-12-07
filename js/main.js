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
gsap.from(".formation-title", {
  scrollTrigger: {
    trigger:".formation-title",
    toggleActions: "restart restart none none",
    markers:true,
    start:"center 70%",
  },
  yPercent: 15,
  duration: 3,
  opacity: 0,
  ease:"power4.out"
});