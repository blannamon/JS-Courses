class LikeButton {
    
    constructor(element, likes = 0) {
        this.likes = likes;
        this.element = element;
        this.element.addEventListener('click', this.like.bind(this))
    }

    like() {
        this.likes++;
        this.render();
        // console.log(this)
    }

    render() {
        if(this.likes == 0){
            this.element.innerHTML = `Like please)`
        } else if(this.likes > 0 && this.likes < 1000){
            this.element.innerHTML = `${this.likes} &#128153;`
        } else if(this.likes >= 1000 && this.likes < 1000000){
            let num = this.likes / 1000;
            num = Math.floor(num);
            this.element.innerHTML = ` &#128153; ${num}K`
        } else if(this.likes >= 1000000){
            this.element.innerHTML = ` &#128153; ${ (this.likes / 1000000).toFixed(1) }M`
        }
    }
    
}

    /**
     * Корректировка округления десятичных дробей.
     *
     * @param {String}  type  Тип корректировки.
     * @param {Number}  value Число.
     * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
     * @returns {Number} Скорректированное значение.
     */
    function decimalAdjust(type, value, exp) {
        // Если степень не определена, либо равна нулю...
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Если значение не является числом, либо степень не является целым числом...
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        // Сдвиг разрядов
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        // Обратный сдвиг
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    // Десятичное округление к ближайшему
    if (!Math.round10) {
        Math.round10 = function (value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
    // Десятичное округление вниз
    if (!Math.floor10) {
        Math.floor10 = function (value, exp) {
            return decimalAdjust('floor', value, exp);
        };
    }
    // Десятичное округление вверх
    if (!Math.ceil10) {
        Math.ceil10 = function (value, exp) {
            return decimalAdjust('ceil', value, exp);
        };
    }
