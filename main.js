// cambio cantidad de productos ingresados por el usuario
let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click',()=>{
    userInputNumber++;
    userInput.value = userInputNumber
    console.log(userInputNumber);
})


minusBtn.addEventListener('click',()=>{
    userInputNumber--;
    if(userInputNumber<=0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber
    console.log(userInputNumber);
})


// Agregar total de productos al carro

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');

let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
    
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductIntModal();
    

})

// modal del ico-cart

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');

const productContainer = document.querySelector('.cart-modal__chekout-container');

cartIconBtn.addEventListener('click',()=>{
      cartModal.classList.toggle('show');

      if(lastValue == 0){
        productContainer.innerHTML = '<p class="cart-empty"> Your cart is empty </p>';       
      }else{
        drawProductIntModal();
      }
    }
);

// borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click',()=>{
        productContainer.innerHTML = '<p class="cart-empty"> Your cart is empty </p>';
        lastValue=0;
        cartNotification.innerText = lastValue;
    });
}

// image changes

const imageContainer = document.querySelector('.gallery__image-container');
const previousGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');

let imgIndex = 1;


nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});


previousGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});

// mostrar modal gallery

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click',()=>{
    imagesModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click',()=>{
    imagesModal.style.display = 'none';
});

// image changes  of the image thumnails

let thumbnails = document.querySelectorAll('.gallery__thumnail');
thumbnails = [...thumbnails]


thumbnails.forEach(thumnail =>{
    thumnail.addEventListener('click',event=>{
        imageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id}.jpg')`
        
    });
});

// image changes  of the image thumnails modal

const modalImageContainer = document.querySelector('.modal-gallery__image-container');
let thumbnailsModal = document.querySelectorAll('.modal-gallery__thumnail');
thumbnailsModal = [...thumbnailsModal]


thumbnailsModal.forEach(thumnailmodal => {
    thumnailmodal.addEventListener('click', event=>{
        modalImageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
});
// image changes of modal with buttons

const previusModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');



nextModalBtn.addEventListener('click', ()=>{
    changeNextImageModal(modalImageContainer);
});


previusModalBtn.addEventListener('click', ()=>{
    changePreviousImageModal(modalImageContainer);
});

// navbar modal 

const menuBtn = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const modalCloseNavbar = document.querySelector('.modal-navbar__close-icon')

menuBtn.addEventListener('click',()=>{
    modalNavbar.style.display = 'block';
});

modalCloseNavbar.addEventListener('click',()=>{
    modalNavbar.style.display = 'none';
});







// functions

function drawProductIntModal(){

    productContainer.innerHTML =`<div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
        <div>
           <p class="cart-modal__product">Autumn Limited Edition</p>
           <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
           </div>
           <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
           </div>
       <button class="cart-modal__checkout">Checkout</button>
      </div>`
    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerText = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`
}

function changeNextImage(imgContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;

    }
    imageContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
}
function changePreviousImage(imgContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
}
// Modal button fucntions


function changeNextImageModal(modalImageContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;

    }
    modalImageContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`
}
function changePreviousImageModal(modalImageContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    modalImageContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`

}
