let parent = document.getElementById('product-grid');

class Product {
   
    constructor( name, category = "All items", images = [], currency = {"amount": undefined, "currency": undefined}, quantity = 0 ) {
        this.name = name;

        typeof category === "string" ? this.category = category : console.error('Category must be a string');
        
        Array.isArray(images) ? this.images = images : console.error('Images must be an array');

        Object.keys(currency).includes('amount') && Object.keys(currency).includes('currency') ? this.currency = currency : console.error('Currency must be an object containing "currency" and "amount" properties');

        Number.isInteger(quantity) ? this.quantity = quantity : console.error('Quantity must be an integer');
    }

    render(){
        let div = create('div', parent.querySelector('.row'), 'col-md');
        
        // Upper part - Images
        let imageContainer = create('div', div, 'img-container owl-carousel');
        this.images.forEach(
            image => { 
                let img = create('img', imageContainer, 'img');
                img.setAttribute('src', image)
             }
        )
        
        // Lower part - Information
        let infoContainer = create('div', div, 'info-container');
        let h4 = create('h4', infoContainer, undefined, this.name);
        let h6 = create('h6', infoContainer, undefined, this.category);
        let qtyContainer = create('div', infoContainer, 'qty-container');
        let qty = create('p', qtyContainer, 'quantity', this.quantity ? this.quantity : '0');
        let leftTxt = create('p', qtyContainer, 'txt-qty', 'left');
        let preloader = create('p', qtyContainer, 'preloader');
        let priceContainer = create('div', infoContainer, 'price-container');

        return div    

    }
}
