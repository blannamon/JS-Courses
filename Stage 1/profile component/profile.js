// Этот файл объявляет функционал. Вызывается он из index.html в тэге <script>, который ниже импортированного.

// the object of our component
let profileComponent = {

    // properties
    open: false, // окно изначально закрыто/спрятано

    user: {
        avatar: "https://i.picsum.photos/id/237/300/300.jpg",
        fullName: "Will Patterson",
        firstName: "Will",
        lastName: "Patterson",
        email: "w.patterson@mail.com",
        phone: "+123456789",
        rating: 3.4 // fivestar rating
    },

    //methods
    render: function(){
        // ПРОВЕРКА ПРАВИЛЬНОГО РАЗМЕЩЕНИЯ СКРИПТА В HTML-ДОКУМЕНТЕ
            // alert("Hello")

        // ПРОВЕРКА ВОЗМОЖНОСТИ ПОМЕСТИТЬ ТЕКСТ ВНУТРЬ НЕОБХОДИМОГО ЭЛЕМЕНТА
            let nav = document.getElementById("navbar")

            // ******************
            // ДОМАШКУ ДЕЛАТЬ ТУТ
            // ******************
            
            function ratingOutput(userStars, classToChange){
                if (classToChange == "rating-grey"){
                    let ratingGreyStars = ``
                    for (let n = 0; n < Math.round(userStars); n++) {
                        ratingGreyStars += `<span class="${classToChange}">&#9733;</span>`
                    }
                    return ratingGreyStars
                }
                else if(classToChange == "rating"){
                    let ratingYellowStars = ``
                    for(let n = 0; n < Math.round(userStars); n++){
                        ratingYellowStars += `<span class="${classToChange}">&#9733;</span>`
                    }
                    return ratingYellowStars
                }
            }

            let html = ``

            if( this.open ){
                html = `<div class="open">
                    <button onclick="profileComponent.hide()">-</button>
                    <img class="userpic" src="${this.user.avatar}"/>
                    <span class="username">${this.user.firstName + " " + this.user.lastName.substring(0, 1) + "."}</span>
                    <ul>
                        <li><b>Email:</b> ${this.user.email}</li>
                        <li><b>Phone:</b> ${this.user.phone}</li>
                        <li><b>Rating: </b>
                            <div class="stars__container">
                                <span class="grey-stars">${ratingOutput(5, "rating-grey")}</span><span class="yellow-stars">${ratingOutput(this.user.rating, "rating")}</span>
                            </div>
                        </li>
                        
                    </ul>
                </div>`
            }
            else{
                // при клике на кнопку ниже мы не можем использовать this.show(), т.к. вызывается она уже не из объекта, а из окна браузера
                html = `<div class="closed">
                    <button onclick="profileComponent.show()">+</button>
                    <img class="userpic" src="${this.user.avatar}"/>
                    <span class="username">${this.user.firstName + " " + this.user.lastName.substring(0,1) + "."}</span>
                </div>`
            }

            nav.innerHTML = html
    },
    show: function(){
        this.open = true
        this.render()
    },
    hide: function(){
        this.open = false
        this.render()
    }
}

