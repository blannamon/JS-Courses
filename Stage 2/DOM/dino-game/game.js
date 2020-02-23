/*
    Data of the map:
    • 0 - empty
    • 1 - cactus
    • 9 - Rex
*/

const EMPTY = 0;
const CACTUS = 1;
const MEAT = 2;
const REX = 9;
let data = [9, 0, 0, 0, 0, 0, 0, 1, 0, 0];

function renderMap(){
    let land = document.getElementById('land');

    for (i in data){                                                                // Works as 'for(let i = 0; i < data.length; i++)'
        let div = document.createElement('div');

        if(data[i] == REX){
            div.className = 'dino';
        } 
        else if (data[i] == CACTUS){
            div.className = 'cactus';
        }
        else if (data[i] == EMPTY){
            div.className = 'empty';
        }
        else if (data[i] == MEAT){
            div.className = 'meat';
        }
        
        land.appendChild(div);
    }

}

function clearMap(){
    // Дома написать функцию, включив в неё 'for + .removeChild()'                  ◄◄◄ HOMETASK ►►►
    let land = document.getElementById('land');
    // land.innerHTML = '';
    
    while( land.children.length > 0 ){
        land.removeChild(land.children[0])
    }

}

function move(){
    // Удаляем вторую ячейку из массива data
    data.splice(1, 1);

    // Добавляем в конец массива 0, 1 или 2
    let random = Math.random();
    if(random < 0.2){
        data.push(1);
    } 
    else if (random >= 0.2 && random < 0.3) {
        data.push(2);
    }
    else if (random >= 0.3) {
        data.push(0);
    }
}

function jump(){
     alert();
}

renderMap();

setInterval(function(){
    move();
    clearMap();
    renderMap();
}, 500)