// #################### DATA #################### 
// GAME MAP IN MEMORY
// LEGEND
const EMPTY = 0;
const PACMAN = 1;
const CHERRY = 2;
const BOMB = 3;

let pac_r = 0;
let pac_c = 0;
let pac_d = "right";
let pac_hp = 100;
let pac_stat = "";

let map = [
    [1,0,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0,0],  
    [0,0,3,0,0,2,0,3,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,2,0,0],
    [2,0,0,0,0,0,0,0,0,0],
    [0,0,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,3,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,2]
];

//console.log(map.length);                        // размер Map
//console.log(map[0].length);                     // размер каждого Row этого Map 


// #################### LOGIC ####################

/*
    RENDER MAP
*/

let div_map = document.getElementById('map');

function renderMap(){
    for(let row = 0; row < 10; row++){
        for (let col = 0; col < 10; col++){
            renderCell(map[row][col])
        }
    }
    renderStatus();
}



/*
    RENDER CELL
*/

function renderCell(what){
    let div = document.createElement('div');

    switch(what){
        case 1:
            div.className = `pacman ${pac_d} ${pac_stat}`;
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



/*
    CLEARING THE SCREEN
*/

function clearMap(){
    let divs = div_map.children;
    while(divs.length > 0){
        div_map.removeChild(divs[0]);
    };
    document.body.removeChild(document.getElementById('status'));    
}



/*
    ACTION (onkeydown event)
*/

function action(key){
    map[pac_r][pac_c] = EMPTY;

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

    map[pac_r][pac_c] = PACMAN;
    clearMap();
    renderMap();
}

document.body.onkeydown = action;



/*
    PACMAN MOVES
*/

function moveRight(){
    if(pac_c < (map[pac_r].length - 1)){
        pac_c++;
    }
    checkBomb();
    checkCherry();
    pac_d = "right";
}

function moveLeft(){
    if(pac_c > 0){
        pac_c--;
    }
    checkBomb();
    checkCherry();
    pac_d = "left";
}

function moveUp(){
    if(pac_r > 0){
        pac_r--;
    }
    checkBomb();
    checkCherry();
    pac_d = "up";
}

function moveDown(){
    if(pac_r < (map.length - 1)){
        pac_r++;
    }
    checkBomb();
    checkCherry();
    pac_d = "down";
}



/*
    CHECK BOMB
*/

let checkBomb = () => {
    if (map[pac_r][pac_c] == BOMB) {
        pac_hp -= 50;
        pac_stat = 'exploding';
        setTimeout(()=>{
            pac_stat = '';
            clearMap();
            renderMap();
        }, 2000)
    }
}



/*
    CHECK CHERRY
*/

let checkCherry = () => {
    if (map[pac_r][pac_c] == CHERRY) {
        pac_hp += 10;
        pac_stat = 'healing';
        setTimeout(() => {
            pac_stat = '';
            clearMap();
            renderMap();
        }, 2000)
    }
}



/*
    RENDER STATUS
*/

let renderStatus = () => {
    let statusBox = document.createElement('div');
    statusBox.setAttribute('id', 'status');
    statusBox.innerHTML = `Pacman's health is ${pac_hp}`;
    document.body.appendChild(statusBox);
    // let statusBox = document.getElementById('status');
}



/*
    PRELOAD SCRIPTS
*/

renderMap();