function initialLoad(){
  
let pixelBoard = document.getElementById('pixel-board');
for ( let i = 0 ; i < 5 ; i ++ ){
    for ( let j = 0 ; j < 5 ; j ++ ){
        let eachPixel = document.createElement('div');
        eachPixel.className = "pixel";
        eachPixel.style.backgroundColor = "white";
        eachPixel.style.width = "40px";
        eachPixel.style.height= "40px"
        pixelBoard.appendChild(eachPixel);  
    }
}

let currentColor = document.querySelector('.selected');
let colorToFill = document.getElementById('pixel-board');
    colorToFill.addEventListener('click',function(event){
        if(event.target.id != "pixel-board"){
        event.target.style.backgroundColor = currentColor.id;
        }
    });

}

let btn = document.getElementById('generate-board');
btn.addEventListener('click',createBoard);

function createBoard(){
    let inpt = document.getElementById('board-size');
    if(inpt.value < 5){
        inpt.value = 5;
        
    } else if(inpt.value > 50){
        inpt.value = 50;
    }

    if (inpt.value === ""){
        alert ("Board inválido!")
    } else {
        clearFullBoard();
        let pixelBoard = document.getElementById('pixel-board');
    for ( let i = 0 ; i < inpt.value ; i ++ ){
        for ( let j = 0 ; j < inpt.value ; j ++ ){
            let eachPixel = document.createElement('div');
            eachPixel.className = "pixel";
            eachPixel.style.backgroundColor = "white";
            eachPixel.style.width = "40px";
            eachPixel.style.height= "40px"
            pixelBoard.appendChild(eachPixel);                 
        }
    }
    let size = document.getElementById('pixel-board');
    size.style.width = (42.5 * inpt.value) + "px";
    }
    


}

window.onload = initialLoad();

let colorSelected = document.getElementById("color-palette");
colorSelected.addEventListener('click',getColor);

function getColor(event){
    let oldSelectedDiv = document.querySelector('.selected');
    let currentSelectedDiv = event.target;

    if(currentSelectedDiv.id != "color-palette"){
        oldSelectedDiv.classList.remove('selected');
    currentSelectedDiv.classList.add('selected');
   
    }

    let myColor = event.target.id;


    let colorToFill = document.getElementById('pixel-board');
    colorToFill.addEventListener('click',function(event){
        if(event.target.id != "pixel-board"){
        event.target.style.backgroundColor = myColor;
        }
    });
    
}

let clearBoardBtn = document.querySelector('#clear-board');
clearBoardBtn.addEventListener('click',clearBoard);

function clearBoard(){
    let pixelBoard = document.getElementsByClassName('pixel')
    for( let i=0; i< pixelBoard.length ; i+=1){
        pixelBoard[i].style.backgroundColor = 'white';
    }
}

function clearFullBoard(){
    let fullDelete = document.getElementsByClassName('pixel')
    while (fullDelete.length > 0){
        fullDelete[0].remove();
    }
}
