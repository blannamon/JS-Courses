function tick(){
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    (hh < 10) ? (hh = "0" + hh) : (hh = hh);
    (mm < 10) ? (mm = "0" + mm) : (mm = mm);
    (ss < 10) ? (ss = "0" + ss) : (ss = ss);
    
    console.log(`${hh}:${mm}:${ss}`);

    let doc = document.getElementById('display');
    doc.innerHTML = `${hh}:${mm}:${ss}`;
}

setInterval( tick, 1000 ); // запускаем функцию tick() каждую 1 сек (1000 милисекунд)