// selecting by ID

const title=document.getElementById("title")
console.log(title);
console.log(title.textContent);

//selecting by class
const paragraph=document.getElementsByClassName("description");
console.log(paragraph);
console.log(paragraph[0].textContent);

//selecting by tag name
const listItem=document.getElementsByTagName("li");
console.log(listItem);
console.log(listItem[0].textContent);

//using queryselector
const firstparagraph=document.querySelector(".description");
console.log(firstparagraph);
console.log(firstparagraph.textContent);

//using queryselectorAll
const allListItems=document.querySelectorAll("li");
console.log(allListItems);
allListItems.forEach((item)=>console.log(item.textContent));

const title=document.getElementById("tittle");
title.textContent="updated DOM title";
title.stlecolor="white";
title.style.backgroundcolor="blue";
title.classList.add("something");

const list=document.getElementById("List";
    const newItem=document.createElement("li");
    newItem.appendChild(newItem);
    const firstItem=document.querySelector("#list li");
    list.insertBefore(newItem,firstItem);

const button =document.getElementById("btn");

function sayHello(){ 
    let name= prompt("enter your name");    
    console.log("Hello");
}
button.addEventListener("click",sayHello);
 
fuction sayHello(){
    let name=prompt("enter your name");
    console.log(name);
     // if (name){
     //alert(`Hello ${name}`);
     } else{
        //alert("no name entered");
        //}
        
        const iscinfirmed=confirm(`Did you typed,${name}?`);
        if(isconfirmed){
            console.log(`Hello,${name}`);
        }else{
            console.log("try again");
        }
        else{
            console.log("no name entered");
        }
     }
 }
localStorage.setItem("username","jabeen");
console.log(localstorage.getItem("username"))


