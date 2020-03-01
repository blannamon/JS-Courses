class Ball{
    constructor(){
        // Создаём для нового объекта див и запоминаем его. Нужно потому, что после окончания функции constructor мы потеряем объект.
        this.div = document.createElement('div');
        this.div.className = 'ball';
        this.left = parseInt(Math.random() * (window.innerWidth - 48));
        this.div.style.left = `${this.left}px`;
        this.max_height = parseInt(Math.random() * window.innerHeight * 0.6);
        this.height = this.max_height;
        this.speedY = -1;
        this.speedX = -2 + Math.random() * 4;
        this.div.style.bottom = `${this.height}px`;

        this.speedA = -10 + Math.random() * 20;
        this.angle = Math.random() * 360;
        this.div.style.transform = `rotate(${this.angle}deg)`;

        this.div.addEventListener('click', ()=>{
            this.speedX *= Math.random() * 66;
        })
    }
    render(parent){
        parent.appendChild(this.div);
    }
    fall(){
        this.timer = setInterval(()=>{
            // Arrow function solves the problem with defining 'this'

            if(this.left <= 0 || this.left >= window.innerWidth){
                this.speedX *= -1;
            }

            this.angle += this.speedA;
            this.speedA *= 0.999
            this.div.style.transform = `rotate(${this.angle}deg)`;

            this.left += this.speedX;
            this.div.style.left = this.left + 'px';
            this.speedX *= 0.999;

            if(this.speedY < 0){ // falling
                this.speedY *= 1.021;
            }
            if(this.speedY > 0){ // bouncing
                this.speedY *= 0.975;
            }
            this.height += this.speedY;
            this.div.style.bottom = `${this.height}px`;
            if(this.height <= 0){
                this.speedY *= -1;
                this.max_height *= 0.7;
            }
            if(this.height >= this.max_height){
                this.speedY *= -1;
            }
            if(this.max_height <= 3){
                clearInterval(this.timer)
            }
        },10)
    }
}

//////////////////
let quantity = 50;
while(quantity > 0){
    let b = new Ball();
    b.render(document.body);
    b.fall();
    quantity--;
}
