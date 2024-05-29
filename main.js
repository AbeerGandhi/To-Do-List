const inputBox = document.getElementById("input");
const listCont = document.getElementById("list");

function add(){
    if(inputBox.value === ''){
        alert("Enter something !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = "";
    save();
}

listCont.addEventListener("click",function(e){
    if( e.target.tagName=== "LI"){
        e.target.classList.toggle("done");
        save();
    }
    else if( e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",listCont.innerHTML);
}

function show(){
    listCont.innerHTML = localStorage.getItem("data");
}
show();