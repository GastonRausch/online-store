const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.burger-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');

const mobileMenu = document.querySelector('.mobile-menu');
const asideDetails = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click',toggleCartMenu);


function toggleCartMenu(){
    const mobileMenuOpened = !mobileMenu.classList.contains('inactive');
    
    asideDetails.classList.toggle('inactive');

    const asideDetailsOpened = !asideDetails.classList.contains('inactive');
    if( asideDetailsOpened && mobileMenuOpened ){
        toggleMobileMenu();
    }
}

function toggleMobileMenu(){
    const asideDetailsOpened = !asideDetails.classList.contains('inactive');
    
    mobileMenu.classList.toggle('inactive');

    const mobileMenuOpened = !mobileMenu.classList.contains('inactive');
    if( asideDetailsOpened && mobileMenuOpened ){
        toggleCartMenu();
    }
}

function toggleDesktopMenu(){
    const desktopMenu = document.querySelector('.desktop-menu');
    desktopMenu.classList.toggle('inactive');
}