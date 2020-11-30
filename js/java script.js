window.onload = function () {
    let vol = document.querySelector('video');
    vol.volume = 0.1;
}

let modal = document.querySelector('.modal');
let btn = document.querySelector('#myBtn');
let span = document.querySelector('.close');

btn.onclick = function () {
    modal.style.display = 'block';
}
span.onclick = function () {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


let Blue = document.querySelector('#imgBlue');
let Orange = document.querySelector('#imgOrange');
let skillsOpacityLeft = document.querySelector('.second--container__blok--left');
let skillsOpacityRight = document.querySelector('.second--container__blok--right');
let skillsOpacityThree = document.querySelector('.second--container__blok--three');
skillsOpacityLeft.style.marginLeft = '-1000px';
skillsOpacityRight.style.marginRight = '-1000px';
skillsOpacityThree.style.marginRight = '-1000px';

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >= 150 ) {
        skillsOpacityLeft.style.opacity = 1;
        skillsOpacityLeft.style.marginLeft = '0px';
    }
    if (scrollTop >= 470 ) {
        skillsOpacityRight.style.marginRight = '0px';
        skillsOpacityRight.style.opacity = '1';
    }
    if (scrollTop >= 840 ) {
        skillsOpacityThree.style.marginLeft = '0px';
        skillsOpacityThree.style.opacity = '1';
    }
    else if (scrollTop <= 150 ) {
        skillsOpacityLeft.style.opacity = 0;
        skillsOpacityLeft.style.marginLeft = '-1000px';
    }
    else if (scrollTop <= 470) {
        skillsOpacityRight.style.marginRight = '-1000px';
        skillsOpacityRight.style.opacity = '0';
    }
    else if (scrollTop <= 840 ) {
        skillsOpacityThree.style.opacity = 0;
        skillsOpacityThree.style.marginLeft = '-1000px';
    }

    if (scrollTop >= 200) {
        Orange.style.left = '-300px';
    } else if (scrollTop <= 200) {
        Orange.style.left = '-2000px';
    }
    if (scrollTop >=500) {
        Blue.style.right = '-550px';
    } else if (scrollTop <=500) {
        Blue.style.right = '-2000px';
    }
    
} )


