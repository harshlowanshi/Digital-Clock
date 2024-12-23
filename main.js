const btn = document.querySelector("#btn")

const body = document.querySelector("body")

 const box =document.querySelector("#box")
//  console.log(box);




setInterval(() => {
    let date = new Date().toLocaleTimeString()
    box.textContent=date

}, 1000);




let change= 1;
function changeMode(){
    if( change==1){
        body.style.backgroundColor="white"
        box.style.color="white"
        box.style.backgroundColor="black"
        btn.style.backgroundColor="black"
        btn.style.color="white"
        
        change=0
    }  else if (change==0) {
        body.style.backgroundColor="black"
          box.style.backgroundColor="white"
         box.style.color="black"
 btn.style.backgroundColor="white"
        btn.style.color="black"

        change=1
        
    } 
}

btn.addEventListener("click", changeMode)

