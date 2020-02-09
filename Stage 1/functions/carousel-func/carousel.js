let n = 1;

function next(){
    n++;
    if(n > 3){
        n = 1;
    } 
    showSlide(n);
}

function prev(){
    n--;
    if(n <= 0){
        n = 3;
    } 
    showSlide(n);
}

function showSlide(slide_number){

    let div = document.getElementById("carousel");
    div.innerHTML = `
        <div class="slide animated zoomIn">
            <img src="img/${slide_number}.jpg">
        </div>
    `

}

showSlide(n);

setInterval(next, 2000)