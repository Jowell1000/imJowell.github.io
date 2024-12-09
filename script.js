const nav = document.getElementsByClassName('navContainer')[0];
const navbarBtn = document.getElementById('navbarBtn');

navbarBtn.addEventListener('click', function(){
    if(nav.style.left === '0px'){
        nav.style.left='-142px';
    }else{
        nav.style.left='0px';
    }
})

function adjustNavPosition() {
    const navContainer = document.querySelector('.navContainer');
    if (window.innerWidth <= 950) {
        navContainer.style.left = '-142px';
    } else {
        navContainer.style.left = '0px';
    }
}

// Initial adjustment
adjustNavPosition();

// Adjust on window resize
window.addEventListener('resize', adjustNavPosition);