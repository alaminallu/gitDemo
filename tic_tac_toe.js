let boxes = document.querySelectorAll(".box");

const winnerName = document.querySelector(".winnerName");
let newGameBtn  = document.getElementById("newGameBtn");
let resetGame = document.getElementById("resetGameBtn");


let payero = true;



const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


boxes.forEach(function(box){

    box.addEventListener("click",function(){

        if(payero){

            box.innerHTML="o";
            payero= false;
            
        }else{
            box.innerHTML="x";
            payero= true;
        }
        box.disabled = true;
        checkwiner();

       });

});




function checkwiner(){

    for(let pattern of winpatterns){
            
            let posstion1Value = boxes[pattern[0]].innerText;
            let posstion2Value = boxes[pattern[1]].innerText;
            let posstion3Value = boxes[pattern[2]].innerText;
            
            if(posstion1Value != "" && posstion2Value != "" &&posstion3Value !=""){

                if(posstion1Value === posstion2Value && posstion2Value=== posstion3Value){

                    console.log("Winner=> "+posstion1Value);
                    disabledBoxes();
                    winnerName.innerHTML="Congratulation ("+posstion1Value+ ")";
                    winnerName.style.display = "block";
                    
                }

            }

    }
}


function disabledBoxes(){
    for(let box of boxes){

        box.disabled= true;
    }
}

newGameBtn.addEventListener("click",function(){
    reloadGame();
});

resetGame.addEventListener("click",function(){
    reloadGame();  
});

 function reloadGame(){
    payero= true;
    for(let box of boxes){

        box.disabled= false;
        box.innerText="";
    }
    winnerName.innerHTML="";
    winnerName.style.display= "none";
}




