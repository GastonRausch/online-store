const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.burger-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');

const mobileMenu = document.querySelector('.mobile-menu');
const asideDetails = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartMenu);


function toggleCartMenu() {
    const mobileMenuOpened = !mobileMenu.classList.contains('inactive');

    asideDetails.classList.toggle('inactive');

    const asideDetailsOpened = !asideDetails.classList.contains('inactive');
    if (asideDetailsOpened && mobileMenuOpened) {
        toggleMobileMenu();
    }
}

function toggleMobileMenu() {
    const asideDetailsOpened = !asideDetails.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');

    const mobileMenuOpened = !mobileMenu.classList.contains('inactive');
    if (asideDetailsOpened && mobileMenuOpened) {
        toggleCartMenu();
    }
}

function toggleDesktopMenu() {
    const desktopMenu = document.querySelector('.desktop-menu');
    desktopMenu.classList.toggle('inactive');
}

const productArray = [];
productArray.push(
    {
        name: 'Bike',
        img: "./images/bike1.jpeg",
        price: 120,
    },
);
productArray.push(
    {
        name: 'Bike 1',
        img: "./images/bike2.jpeg",
        price: 260,
    },
);
productArray.push(
    {
        name: 'Bike 2',
        img: "./images/bike1.jpeg",
        price: 150,
    },
);
productArray.push(
    {
        name: 'Bike 3',
        img: "./images/bike3.jpeg",
        price: 420,
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
    },
);

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const emptyDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        emptyDiv.appendChild(productPrice);
        emptyDiv.appendChild(productName);

        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');

        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productImgCart);

        productInfo.appendChild(emptyDiv);
        productInfo.appendChild(productFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productArray);