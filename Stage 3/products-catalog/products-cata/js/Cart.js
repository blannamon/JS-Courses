class Cart{
    constructor(){
        this.items = [];
        this.cartDiv = document.getElementById('cart');
        this.empty = true;
        this.isShown = false;
    }
    get itemCount(){
        return this.items.length;
    }

    get productCount(){
        let sum = 0;
        this.items.map(item => {
            sum += item.quantity;
        })
        return sum;
    }
    
    addProduct(p, q = 1){
        let added = this.items.filter(item => item.product.id === p.id)[0];
        !this.itemCount || !added ? this.items.push({product: p, quantity: q}) : added.quantity++;
        if (this.empty) {
            this.getThick();
        }
        this.render();
        return this.items;
    }
    removeProduct(p){
        let product = this.items.find(item => item.product.id === p.product.id);

        if(product.quantity > 1){
            product.quantity-- ;
        } else {
            this.items = this.items.filter(item => item.product.id !== p.product.id);
            if(!this.items.length){
                this.cartDiv.classList.remove('full-cart');
                this.empty = true;
            };
        }
        this.render();
    }

    updateCounter(){
        let counter = this.cartDiv.getElementsByClassName('cart-items__counter')[0];
        counter.innerHTML = this.productCount ? this.productCount : null;
    }

    getThick(){
        this.cartDiv.classList.add('full-cart');  
        this.empty = false;
    }
    
    render(){
        this.updateCounter();
    }

    static load(){
        
    }
}

let cartObj = new Cart();