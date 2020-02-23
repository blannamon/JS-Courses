function addFlake(){
    // 1. create div
    // 2. class = "flake"
    // 3. append to body

    let flake = document.createElement('div');
    let size = 'md';
    if(Math.random() < 0.333){
        size = 'sm'
    }
    if (Math.random() > 0.666){
        size = 'lg'
    }
    flake.className = `flake ${size}`;
    let left = parseInt( Math.random() * (window.innerWidth - 10) );
    flake.style.left = `${left}px`;
    document.body.appendChild(flake);
    console.log(document.body.querySelectorAll('.flake').length)

}


function removeFlakes(){
    let snow = document.body.getElementsByClassName('flake');
    
    let remove = (flake) => {
        // console.log(flake);
        document.body.removeChild(flake);
    }
    for(i = 0; i < snow.length; i++){
        (snow[i].getBoundingClientRect().top > window.innerHeight) ? remove(snow[i]) : null;
    }

}

setInterval(addFlake, 100);
setInterval(removeFlakes, 1500);