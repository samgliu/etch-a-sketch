function addbox(size) {
    setCanvasAtt(size);
    for (let i = 0; i < size * size; i++) {
        let temp = document.createElement("div");
        temp.setAttribute("class", "grid-item");
        document.querySelector(`.canvas`).appendChild(temp);
    }
}

function setCanvasAtt(size) {
    let ele = document.querySelector(`.canvas`);
    ele.innerHTML = "";
    //let ele = document.getElementsByClassName('.canvas');
    console.log(ele);
    //ele.setAttribute('grid-template-columns', 'repeat(' + size + ', 13px)');
    //ele.setAttribute('class', 'canvas grid');
    ele.style["grid-template-columns"] = "repeat(" + size + ", 13px)";
    ele.style.width = 13 * size + 'px';
    
}

function addListener(){
    let nodes = document.querySelectorAll(`#can > *`);
    for (var i = 0; i < nodes.length; i++) {
        this.addEventListener("mouseover", function(event){
            event.target.classList.replace("grid-item", "grid-item-black");
        });
        console.log(nodes[i]);
    }
}

function mouseOver(item){
    item.style["background-color"] = "black";
    console.log("1");
}

function clearCanvas() {
    let ele = document.querySelector(`.canvas`);
    ele.innerHTML = "";
    ele.style.width = '1px';
}

function start() {
    let size = Number(prompt("Please enter the size", "64"));
    addbox(size);
}
