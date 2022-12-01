gsap.registerPlugin(ScrollTrigger);

document.querySelector('.img-logo-menu').addEventListener('click', reloadPage);

function reloadPage() {
  console.log('reload');
  window.location.reload()
}

