function GetPropertyValue(object, dataToRetrieve) {
    dataToRetrieve.split('.').forEach(function (token) {
        if (object) object = object[token];
    });

    return object;
}

let selectionCheckbox = document.getElementById("toggle-checkbox__hidden")
let toggleBox = document.querySelector(".toggle-box")
let toggleSwitcher = document.querySelector(".toggle-switcher")
let distFromEdge = GetPropertyValue(toggleSwitcher, "0.offsetLeft")
let distToManage = `calc(100% - ${distFromEdge}px)`


function changeBG() {
    if (selectionCheckbox.checked == false) {
        toggleBox.style.backgroundColor = "red"
        toggleSwitcher.style.transform = "translateX(0)"
    } else {
        toggleBox.style.backgroundColor = "green"
        toggleSwitcher.style.transform = `translateX(${distToManage})`
    }
}