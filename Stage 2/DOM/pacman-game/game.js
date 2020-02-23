// #################### DATA #################### 
// GAME MAP IN MEMORY
// LEGEND
const EMPTY = 0;
const PACMAN = 1;
const CHERRY = 2;
const BOMB = 3;

let pac_r = 0;
let pac_c = 0;

let map = [
    [1,0,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

//console.log(map.length);                        // размер Map
//console.log(map[0].length);                     // размер каждого Row этого Map 


// #################### LOGIC ####################
let div_map = document.getElementById('map');

function renderMap(){
    for(let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++){
            renderCell(map[row][col])
        }
    }
}



function renderCell(what){
    let div = document.createElement('div');

    switch(what){
        case 1:
            div.className = 'pacman';
            break;
        case 2:
            div.className = 'cherry';
            break;
        case 3:
            div.className = 'bomb';
            break;
        default:
            div.className = 'empty';
    };

    div_map.appendChild(div);
}



function clearMap(){
    let divs = div_map.children;

    while(divs.length > 0){
        div_map.removeChild(divs[0]);
    };
}



function action(key){
    switch(key.code){
        case 'ArrowUp':
            moveUp();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowDown':
            moveDown();  
            break;
        case 'ArrowLeft':
            moveLeft();
            break;
    }
}

document.body.onkeydown = action;



function moveRight(){
    map[pac_r][pac_c] = EMPTY;
    pac_c++;
    map[pac_r][pac_c] = PACMAN;
    clearMap();
    renderMap();
}

function moveLeft(){
    map[pac_r][pac_c] = EMPTY;
    pac_c--;
    map[pac_r][pac_c] = PACMAN;
    clearMap();
    renderMap();
}

function moveUp(){
    map[pac_r][pac_c] = EMPTY;
    pac_r--;
    map[pac_r][pac_c] = PACMAN;
    clearMap();
    renderMap();
}

function moveDown(){
    map[pac_r][pac_c] = EMPTY;
    pac_r++;
    map[pac_r][pac_c] = PACMAN;
    clearMap();
    renderMap();
}



renderMap();