let volume = 50

function render() {
    let player = document.getElementById('player');
    let screen = player.firstElementChild;
    let slider = player.children[1].children[1];
    screen.value = volume
    slider.value = volume
}

function up() {
    volume++
    render()
}

function down() {
    volume--
    render()
}

function change() {
    let slider = player.children[1].children[1];
    volume = slider.value;
    render()
}