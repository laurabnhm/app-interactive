document.querySelector('#menu-presentation')
    .addEventListener('click', reloadPage);

function reloadPage() {
  window.location.reload()
  console.log('reload');
}
