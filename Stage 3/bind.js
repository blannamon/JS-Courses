const module = {
    x: 777,
    getX: function(){
        return this.x;
    }
}

alert(module.getX()); 
// Output: 777

const linkToFunction = module.getX;
alert(linkToFunction()) // undefined


// Найти способ внутри функции получить все значения, которые мы ей передаём. 

// --------------------------------------------------

// IoC -> Inversion of Control

// direct control
// AUTHOR - ME
function f(){
    alert(1 + 2)

    // но если эта ф-ция будет:
    //  • get data from SOURCE
    //  • react on EVENT
    //  • repeat over TIME
    //  • ...
}

// USER - ME
f()