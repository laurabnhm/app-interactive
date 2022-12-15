//-----------------------//
//          JS           //
//-----------------------//

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

    if (menu_count_click % 2 == 1) {
        afficheMenu();
        console.log('afficheMenu');
    } else {
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


