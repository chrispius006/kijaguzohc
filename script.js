const button= document.getElementById("but");
const list= document.getElementById("list");
list.style.display="none";
button.addEventListener("click",(Event)=>
{
    if(list.style.display== "none"){
        list.style.display= "block"; 
    }
    else{
        list.style.display= "none";
    }
})