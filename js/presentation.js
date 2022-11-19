document.querySelector('#menu-presentation')
    .addEventListener('click', reloadPage);

function reloadPage() {
  console.log('reload');
  window.location.reload()
}
