
const display = document.getElementById("results-div");
const input=document.getElementById("user-input");
const clear = document.getElementById("clear-btn");
const check = document.getElementById("check-btn");

check.addEventListener("click",()=>{
  const number=input.value;
  if(number===""){
    alert("Please provide a phone number");
    return;
  }
  
  const country= "^(?:1\\s?)?";
  const area= "([0-9]{3}|\\([0-9]{3}\\))";
  const spaces = "([\\s\\-])?";
  const phone = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
  const regex = new RegExp(
    `${country}${area}${spaces}${phone}`
  );

  const match = regex.test(number);
  const str=`${match?"Valid":"Invalid"} US number: ${input.value}`;
  display.innerHTML+=
  `<p class="answers">${str}</p>`;
  input.value="";
  });
  clear.addEventListener("click",()=>{
    display.innerHTML="";
  });
