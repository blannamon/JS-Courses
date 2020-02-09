function updateThermometer() {
    // Алгоритм функции:
    // * найти поле "temperature-input"
    let input = document.getElementById('temperature-input');
    
    // * найти div "termometer-indicator"
    let indicator = document.getElementById('thermometer-indicator');
    
    // * прочитать значение температуры, указанное в input
    let t = Number(input.value);

    // * проверить, находится ли значение в диапазоне от -20 ... + 50 градусов C
    // * индикатору термометра назначить свойство .style.height таким образом, чтобы каждый градус увеличивал ширину на 3px
    let ddown = document.getElementById('temperature-ddown');
    if(t >= -20 && t <= 50 && ddown.value == "Celsium"){
        let indicatorValue = 60;
        indicatorValue = indicatorValue + t * 3;
        indicator.style.width = indicatorValue + 'px';
    }
    else if (t >= -4 && t <= 122 && ddown.value == "Fahrenheit"){
        let indicatorValue = 60;
        indicatorValue = indicatorValue + (t / (30 / 18));
        indicator.style.width = indicatorValue + 'px';
    }
    else {
        console.log(`The value is out of range`)
    }
}

function convertValues(){
    let ddown = document.getElementById('temperature-ddown');
    let input = document.getElementById('temperature-input');
    let thermometer = document.getElementById('thermometer');
    let digits = document.getElementById('thermometer-digits');

    switch(ddown.value){
        case 'Celsium':
            input.value = (Number(input.value) - 32) / 1.8;
            for(let i = 0; i < digits.children.length; i++ ){
                let digitValue = Number(digits.children[i].innerHTML);
                digitValue = (digitValue - 32) / 1.8;
                digits.children[i].innerHTML = digitValue;
            }
            break;
        case 'Fahrenheit':
            input.value = Number(input.value) * 1.8 + 32;
            for (let i = 0; i < digits.children.length; i++) {
                let digitValue = Number(digits.children[i].innerHTML);
                digitValue = digitValue * 1.8 + 32;
                digits.children[i].innerHTML = digitValue;
            }
            break;
    }
}

/* 

t * (30 / 18) = 30
50 * (30 / 18) = 30
50 * (...) = 30

t * (30 / 18) = 60
68 * (30 / 18) = 60
68 * (...) = 60

*/