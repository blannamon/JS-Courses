let div = document.getElementById('content');

let showForm = () =>{
    let form = `
    <h1></h1>
    <form>
        <label>
            <b style="font-size: 20px">What is your name?</b><br><br>
            <input type="text" placeholder="Your name here...">
        </label>
        <button>SAVE!</button>
        </form>
    `;
    div.innerHTML = form; 
    let btn = div.getElementsByTagName('button')[0];
    btn.className = 'btn';
    btn.addEventListener('click', saveData);

    // ANIMATION
    addSVG(btn);
    btn.addEventListener('mouseover', () => { setTimeout(() => { runDashes(btn) }, 500) })
}

// showForm();

let saveData = () => {
    let input = div.querySelector('input');
    let name = input.value;
    
    let user = {name: name};
    let userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
}

let showGreeting = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    let name = user.name;
    div.querySelector('h1').innerHTML += `Hello, ${name}!`;
    let button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = `I'm not ${name ? name : 'empty space'}`;
    button.addEventListener('click', showForm);
    div.appendChild(button);
}

if(localStorage.getItem('user')){
    showGreeting();
} else {
    showForm();
    
};









// BUTTON ANIMATION
let addSVG = (btn) => {
    let box = btn.getBoundingClientRect();
    let w = box.width;
    let h = box.height;

    // Creating SVG container
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);

    //Creating rectangle inside of SVG
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', w);
    rect.setAttribute('height', h);
    rect.setAttribute('x', 0);
    rect.setAttribute('y', 0);
    let rectP = (w + h) * 2;
    rect.style = `fill: transparent; stroke: rgb(153, 102, 248); stroke-width: 1; stroke-dasharray: ${rectP}; stroke-dashoffset: -${rectP}`
    
    // Setting connection between elements
    svg.appendChild(rect);
    btn.appendChild(svg);
}

let btn = div.querySelector('button');
addSVG(btn);

let runDashes = (btn) => {
    let rect = btn.querySelector('rect');
    let w = +rect.getAttribute('width');
    let h = +rect.getAttribute('height');
    let P = Math.round((w + h) * 2);


    let start = -P;
    rect.style.strokeDashoffset = `${start}`;
    rect.style.strokeDasharray = `${-start}`;
    let end = -P * 3;
    
    // console.log((start - end))
    let t = setInterval(() => {
        let offset = parseInt(rect.style.strokeDashoffset);
        if(offset > end){
            --offset;
            // console.log(offset);
            rect.style.strokeDashoffset = offset;
        } else if (offset == end){
            clearInterval(t)
            rect.style.strokeDashoffset = start;
        }
    }, 4)

}

btn.addEventListener('mouseover', () => { setTimeout(()=>{runDashes(btn)}, 500) });

