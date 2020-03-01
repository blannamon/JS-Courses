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
    let w = btn.width;
    let h = btn.height;
    console.log(w, h)
}

addSVG(btn);