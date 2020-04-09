// let images1 = ["https://i.picsum.photos/id/112/400/300.jpg", "https://i.picsum.photos/id/114/400/300.jpg", "https://i.picsum.photos/id/116/400/300.jpg"]
let images1 = ['js/iphone1.png', 'js/iphone2.png', 'js/iphone3.jpg']
let currency1 = {
    amount: 100,
    currency: "USD"
}
let currency2 = {
    amount: 1300,
    currency: "EUR"
}
let currency3= {
    amount: 700,
    currency: "CAD"
}
let products = [
    new Product("iPhone XII", "Mobile phone", images1, currency1, 9),
    new Product("iMac XIV", "PC", ["https://i.picsum.photos/id/118/400/300.jpg", "https://i.picsum.photos/id/119/400/300.jpg"], currency2, 4),
    new Product("iPad IX", "Tablet", ["https://i.picsum.photos/id/128/400/300.jpg"], currency3, 3),
    new Product("Keyboard", undefined, ["https://i.picsum.photos/id/206/400/300.jpg"])
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

 function adjustHeight() {
        let img = document.querySelector('.owl-item.active .img')
        console.log(img.getBoundingClientRect().height)
    }

let arr = document.getElementsByClassName('owl-prev')
window.addEventListener('load', () => {
    Object.keys(arr).forEach(element => {
        arr[element].addEventListener('click', () => {console.log('YES')})
    })

})
