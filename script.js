const inputBox = document.querySelector(".input-text");
const Unorderlist = document.querySelector(".list");
const btn = document.querySelector(".btn");
btn.addEventListener('click', () =>{
    if(inputBox.value == ''){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        Unorderlist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    savedata();
})

Unorderlist.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
})

function savedata(){
    localStorage.setItem("data", Unorderlist.innerHTML)
}

function showlist(){
    Unorderlist.innerHTML = localStorage.getItem("data");
}
showlist();