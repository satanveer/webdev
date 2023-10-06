let music= new Audio("images-sounds/music.mp3")
let audioTurn= new Audio("images-sounds/ting.mp3")
let turn = "X"
let isgameover=false
let musicSkipity= new Audio("images-sounds/skipity-dip-dop.mp3")



//change turn 
const changeTurn=()=>{
    return turn === "X"? "0": "X"
}


//Function to check win

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [0,3,6],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover=true;
            document.getElementById('modi-img').style.width="17vw"
            document.getElementById('modi-img').style.height="20vh"

            musicSkipity.play();
        }
    })

}

//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }


        }
    })

})
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X"
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementById('modi-img').style.width="0vw"
    musicSkipity.pause();
    musicSkipity.currentTime=0;


})
