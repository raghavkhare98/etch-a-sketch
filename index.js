const containerDiv = document.querySelector(".container");
for(let i=0; i<16; i++){
    girdDiv = document.createElement("div");
    girdDiv.classList.add("grid-box");
    containerDiv.appendChild(girdDiv);
}

