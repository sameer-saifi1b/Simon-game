let gameSeq=[];
let userseq=[];

let btns=["red","yellow","blue","green"];

let Started =false;
let level =0;
let h2 =document.querySelector("h2");
document.addEventListener("keypress",()=>{
  if(Started==false){
    console.log("game start");
    Started=true;
  }
  levelUp();
});

function levelUp(){
    userseq =[];
    level++;
    h2.innerText=(`Level ${level}`);
    //random btn choose
let randIdx =Math.floor(Math.random()*3)
let randomColor =btns[randIdx];
let randbtn =document.querySelector(`.${randomColor}`)
gameSeq.push(randomColor);
console.log(gameSeq);
    btnFlash(randbtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },250);
}

function checkAns(idx){
    if(userseq[idx]===gameSeq[idx]){
        if(userseq.length==gameSeq.length){
            setTimeout(levelUp,1000);    
        }
    }else{
        h2.innerText=`Game Over ! Press any key yo start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
  let btn =this;
  btnFlash(btn);
userColor =btn.getAttribute("id");
userseq.push(userColor);
checkAns(userseq.length-1);
}
 
let allBtns =document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    Started=false;
    userseq=[];
    gameSeq=[];
    level=0;
}