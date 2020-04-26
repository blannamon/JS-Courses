// let images1 = ["https://i.picsum.photos/id/112/400/300.jpg", "https://i.picsum.photos/id/114/400/300.jpg", "https://i.picsum.photos/id/116/400/300.jpg"]
let images1 = ['images/iphone1.png',  'images/iphone3.jpg']
let images2 = ['images/imac2.jpg', 'images/imac3.png']
let images3 = ['images/ipad1.jpg', 'images/ipad2.jpg']
let currency1 = {
    amount: 100,
    currency: "USD"
}
let currency2 = {
    amount: 1300,
    currency: "USD"
}
let currency3= {
    amount: 700,
    currency: "USD"
}
let reg = /.+/g
let products = [
    new Product("id_1", "iPhone XII", "Mobile phone", images1, currency1, 9),
    new Product("id_2", "iMac XIV", "PC", images2, currency2, 4),
    new Product("id_3", "iPad IX", "Tablet", images3, currency3, 3),
    new Product("id_4", "Keyboard", undefined, ["images/keyboard1.jpg"],)
]

function create(tagName, parentObj, ...rest){
    let div = document.createElement(tagName);
    parentObj.appendChild(div);
    rest[0] ? div.className = rest[0] : null;
    rest[1] ? div.innerHTML = rest[1] : null;
    return div;
}


function renderProductsGrid(){
        products.forEach(  
            product =>  product.render()
        )
}
renderProductsGrid()


let productCards = document.querySelectorAll(`.col-md`);
productCards.forEach(card => {

    let reg = /^p\-(id_.+)$/;
    let id = card.className.split(' ').filter(className => reg.test(className) ? className : null)[0].replace(reg, '$1');
    let product = products.filter(product => product.id === id ? product : null)[0];

    card.getElementsByTagName('button')[0].addEventListener('click', () => {
        cartObj.addProduct(product);
        cartObj.render();
    })

})

let cartBox = document.getElementById('cart');
let cart = cartBox.getElementsByClassName('cart-img')[0];
let gridCells = Array.from(productCards);

let buyList = document.querySelector('.cart__content ul');
let noItemsText = create('h4', buyList.parentElement, undefined, "No items to display");
let closeIcon = document.querySelector('.cart-close__icon');

closeIcon.addEventListener('click', () => {
    closeIcon.style.display = 'none';
    cartBox.classList.remove('open-cart');
    gridCells.forEach(cell => {
        cell.classList.remove('hidden-grid');
        cell.classList.add('active-grid')
        cell.style.display = 'block';
        setTimeout(() => {
            cell.classList.remove('active-grid')
        }, 1400);
    })
    cartObj.isShown = false;

})

let clearCart = () => {
    Array.from(buyList.children).forEach(item => {
        buyList.removeChild(item)
    })
}

let showCart = () => {
    clearCart();
    gridCells.forEach(cell => {
        cell.classList.add('hidden-grid');  // ok
        setTimeout(() => {cell.style.display = 'none'}, 1400) // ok
    });
    cartBox.classList.add('open-cart');
}

let reloadCart = () => {
    clearCart();
    cartObj.items.forEach((item) => {
        let str = item.product.name + " x " + item.quantity
        let cartCell = create('li', buyList, undefined, str);
        cartCell.style.position = "relative";
        let minusBtn = create('button', cartCell, 'cart-list__remove-btn', 'Remove');
        minusBtn.addEventListener('click', () => {
            cartObj.removeProduct(item);
            reloadCart();
        })
    })

    !cartObj.items.length ? noItemsText.style.display = 'block' : null;
}

let populateCartList = () => {
        noItemsText.style.display = "none";
        reloadCart();
}

window.onload = () => {
    cart.addEventListener('click', () => {
        if(!cartObj.isShown){
            showCart();

            // populate the product list (cart)
            if(cartObj.items.length){
                populateCartList();
            }
            closeIcon.style.display = 'block';
            cartObj.isShown = true;
        }
    });
}
