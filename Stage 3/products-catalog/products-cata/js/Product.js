let parent = document.getElementById('product-grid');

class Product {
   
    constructor(...args) {
        ([this.id, this.name, this.category, this.images, this.currency, this.quantity] = args);    

    }

    set id(value) {
        this._id = value;
    }
    get id() {
        return this._id;
    }

    set name(value) {
        value ? this._name = value : console.error('Product must have a name');
    }
    get name() {
        return this._name
    }

    set category(value = 'All items') {
        typeof value === "string" ? this._category = value : console.error('Category must be a string');
    }
    get category() {
        return this._category;
    }

    set images(value = []) {
        Array.isArray(value) ? this._images = value : console.error('Images must be an array');
    }
    get images() {
        return this._images;
    }

    set currency(value = {amount: 0, currency: "USD"}) {
        Object.keys(value).includes('amount') && Object.keys(value).includes('currency') ? this._currency = value : console.error('Currency must be an object containing "currency" and "amount" properties');
    }
    get currency() {
        return this._currency;
    }

    set quantity(value = 0) {
        Number.isInteger(value) ? this._quantity = value : console.error('Quantity must be an integer');
    }
    get quantity() {
        return this._quantity;
    }
    


    render(){
        let div = create('div', parent.querySelector('.row'), `col-md p-${this.id}`);
        this.element = div;
        this.currentlyHovered = false;
        
        // Upper part - Images
        let imageContainer = create('div', div, 'img-container owl-carousel');
        // console.log(this)
        // console.log(this.images)
        this.images.forEach(
            image => { 
                let img = create('img', imageContainer, 'img');
                img.setAttribute('src', image)
             }
        )
        
        // Lower part - Information
        let infoContainer = create('div', div, 'info-container');
        let infoHeader = create('div', infoContainer, 'info-header');
        let h4 = create('h4', infoHeader, undefined, this.name);
        let h6 = create('h6', infoHeader, undefined, this.category);
        let qtyContainer = create('div', infoContainer, 'qty-container');
        let qty = create('p', qtyContainer, 'quantity', this.quantity ? this.quantity : '0');
        let leftTxt = create('p', qtyContainer, 'txt-qty', 'left');
        let preloader = create('p', qtyContainer, 'preloader');
        let priceContainer = create('div', qtyContainer, 'price-container');
        let buyButton = create('button', create('div', infoContainer, 'buy-container'), 'buy-btn', `
        Buy for $<span>${this.currency.amount}</span>
        `);
        
        return div    

    }
}
