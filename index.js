
let addValues=document.getElementById("add").value;
let output=document.getElementById("input");
  console.log("output",output)
let add=()=>{
    let inputValues=document.getElementById("input").value;
  
    
    console.log("input", inputValues)
    let inputVal=parseInt(inputValues)+1; // parseint function to convert string to number
    console.log("add", inputVal)
    
    output.value=inputVal 
    
}
let reset=()=>{
  
     output.value="";
}
let subtract=()=>{
    let inputValues=document.getElementById('input').value;
  
    let inputVal=parseInt(inputValues)-1;
    output.value=inputVal
}
