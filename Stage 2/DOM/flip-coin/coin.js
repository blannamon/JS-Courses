let coin = document.querySelector('.coin');
let image = coin.querySelector('.image');

function throwCoin(){
    // 1. Find .coin
    // 2. + class .throw

    coin.classList.add('throw'); 
    image.classList.add('flip');
    // Another way to add a class: coin.classList.toggle('throw')
    // Another way to add a class: coin.className += ' throw'


    // THIS IS NOT THE BEST WAY TO GO
    // setTimeout(()=>{
    //     coin.className = 'coin';
    // }, 3000)
}

function clearClass(){
    // alert();
    // coin.classList.remove('throw')
    coin.classList.remove('throw'); // Toggle включает или выключает заданный класс в зависимости от того, есть он уже или нет. 
    image.classList.remove('flip');

}

// coin.onanimationend = clearClass;                            // Когда закончится анимация этого дива - очистить класс, отвечающий за анимацию.
coin.addEventListener('animationend', clearClass)               // Альтернативный способ привязаться к окончанию анимации.

document.body.onkeydown = throwCoin;