let h1=document.getElementById("heading");
let  value=0;
console.log(h1)

const add= document.querySelector("#add");
const sub= document.querySelector("#subtract")
const reset=document.querySelector("#reset")


add.addEventListener("click",()=>{
 
 value++;
 h1.innerText=value;
 console.log("+",value)

})

sub.addEventListener("click",()=>{
    if(value>0){
        value--;
        h1.innerText=value;
    }


console.log("-",value)
})

reset.addEventListener("click",()=>{
 value=0;
 h1.innerText=value;

})




