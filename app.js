let boxes =document.querySelectorAll(".box");
let reset=document.querySelector("#Reset");
let New = document.querySelector("#new");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]       ];

    const drawgame=()=>{
        msgcon.classList.remove("hide");
        msg.innerText=`Draw...!`;
     };

    boxes.forEach((box) => {
        box.addEventListener("click",()=>{
            console.log("Box was Clicked");
            if(turn0){
                box.innerText="0";
                turn0=false;
                count++;
                
            }else{
                box.innerText="X";
                turn0=true;
                count++;
            } 
           
            box.disabled=true; 
            checkWinner();
        });
    });
    const ResetGame=()=>{
        turn0=true;
        Enableboxes();
        msgcon.classList.add("hide");
    };
    const disableboxes=()=>{
        for(let box of boxes)
        {
            box.disabled=true;
        }
    }
    const Enableboxes=()=>{
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText=""; 
            msgcon.classList.add("hide");
        }
    };
    const showwinner=(winner)=>{
        msg.innerText=`Congratulations ${winner}`;
        msgcon.classList.remove("hide");
        disableboxes();
    };
    const checkWinner =() =>{
        for(let pattern of winpattern){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if(count==9)
            {
                drawgame();
            }

            if(pos1Val != "" && pos2Val != "" && pos3Val !="")
            {
                if(pos1Val===pos2Val && pos2Val===pos3Val )
                {
                console.log("Winner",pos1Val);
                showwinner(pos1Val);
                }
            }
        }
    };
    reset.addEventListener("click",ResetGame);
    New.addEventListener("click",ResetGame);