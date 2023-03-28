const menuEmail                     = document.querySelector('.navbar-email');
const burgerMenu                    = document.querySelector('.burger-menu');
const shoppingCart                  = document.querySelector('.navbar-shopping-cart');
const mobileMenu                    = document.querySelector('.mobile-menu');
const desktopMenu                   = document.querySelector('.desktop-menu');
const asideMyCart                   = document.querySelector('#my-cart-container');
const asideProductDetails           = document.querySelector('#product-detail');
const asideProductDetailsCloseBtn   = document.querySelector('.product-detail-close');
const mainContainer                 = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartMenu);

menus = []
menus.push(asideProductDetails);
menus.push(asideMyCart);
menus.push(mobileMenu);
menus.push(desktopMenu);

mustDarkBackground = false;

var min_width_query = window.matchMedia("(min-width: 641px)");
function min_width_query_f() {
    if ( ! mobileMenu.classList.contains('inactive')){
        mustDarkBackground = false;
        mobileMenu.classList.add('inactive');
    }

    if (!mustDarkBackground) {
        mainContainer.classList.remove('blur-background');
    }
}

min_width_query.addEventListener('change',min_width_query_f);

var max_width_query = window.matchMedia("(max-width: 640px)");

function alternateBetweenMenus(toshow, arr_menus) {
    mustDarkBackground = false;
    for (menu of arr_menus) {
        // Si un menu esta activo asumo que el fondo lo voy a ocultar

        if (toshow === menu) {
            if (menu.classList.contains('inactive')) {
                menu.classList.remove('inactive');
                menu.classList.add('overlap');
                menu.active = true;
            } else if (menu.active == false) {
                menu.classList.add('inactive')
                menu.active = false;
            }
        } else {
            if (!menu.classList.contains('inactive')) {
                menu.classList.add('inactive')
                menu.active = false;
            }
        }

        if (menu.active == true) {
            mustDarkBackground = true;
        }
    }

    if (mustDarkBackground) {
        mainContainer.classList.add('blur-background');
    } else {
        mainContainer.classList.remove('blur-background');
    }
}

function openProductDetails() {
    asideProductDetails.active = true;
    alternateBetweenMenus(asideProductDetails, menus);
}

function closeProductDetails() {
    asideProductDetails.active = false;
    alternateBetweenMenus(asideProductDetails, menus);
}

function toggleCartMenu() {
    asideMyCart.active = asideMyCart.active ? false : true;
    alternateBetweenMenus(asideMyCart, menus);
}

function toggleMobileMenu() {
    mobileMenu.active = mobileMenu.active ? false : true;
    alternateBetweenMenus(mobileMenu, menus);
}

function toggleDesktopMenu() {
    desktopMenu.active = desktopMenu.active ? false : true;
    alternateBetweenMenus(desktopMenu, menus);
    // const desktopMenu = document.querySelector('.desktop-menu');
    // desktopMenu.classList.toggle('inactive');
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
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);
productArray.push(
    {
        name: 'Motorbike 1',
        img: "./images/motorbike1.jpeg",
        price: 1320,
        details: 'Una motorbike re loca',
    },
);

function renderProductDetails() {
    const product = this.productDetails;

    const divCloseButton = document.createElement('div');
    divCloseButton.classList.add('product-detail-close');
    divCloseButton.addEventListener('click', closeProductDetails);

    const imgClosebutton = document.createElement('img');
    imgClosebutton.setAttribute('src', "./icons/icon_close.png");

    divCloseButton.appendChild(imgClosebutton);

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.img);

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');

    const pPrice = document.createElement('p');
    pPrice.innerText = '$' + product.price;

    const pName = document.createElement('p');
    pName.innerText = product.name;

    const pDetails = document.createElement('p');
    pDetails.innerText = product.details ? product.details : 'Without details.';

    const buttonAddToCart = document.createElement('button');
    buttonAddToCart.classList.add('primary-button');
    buttonAddToCart.classList.add('add-to-cart-button');
    buttonAddToCart.innerText = 'Add To Cart';

    const imgButtonAddToCart = document.createElement('img');
    imgButtonAddToCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

    buttonAddToCart.appendChild(imgButtonAddToCart);
    divProductInfo.append(pPrice, pName, pDetails, buttonAddToCart);

    asideProductDetails.replaceChildren(divCloseButton, imgProduct, divProductInfo);

    /* Mostramos el aside */
    openProductDetails();
}

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.productDetails = product;
        productImg.addEventListener('click', renderProductDetails);

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