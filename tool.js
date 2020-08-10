let activeTool = "pencil";
let tools = document.querySelectorAll(".tool-img");
let pencilOptions =   document.getElementById("p-options");
let earserOptions = document.getElementById("e-options");

//tools event listener
for(let i=0; i< tools.length;i++){
    tools[i].addEventListener("click",function(e){
        let element  = e.currentTarget;
        let toolName = element.getAttribute("id");
        if(toolName == "eraser"){
            //color white 
            if(activeTool=='eraser'){
                earserOptions.classList.add("show");
            }else{
                activeTool="eraser";
                pencilOptions.classList.remove("show");
                ctx.strokeStyle= "white";
            }
        }else if(toolName == 'pencil'){
            if(activeTool == 'pencil'){
                pencilOptions.classList.add("show");
            }else{
                activeTool="pencil";
                earserOptions.classList.remove("show");
                ctx.strokeStyle= "black";
            }
        }else if(toolName=="sticky"){
            createSticky();
        }else if(toolName=="upload"){
            uploadImage();
        }else if(toolName=="download"){
            downloadImg();
        }
    });
}

//handle color change of pencil
function handleColorChange(color) {
    ctx.strokeStyle = color;
}


//handle size of pencil and earser
let allSliders = document.querySelectorAll(".slider");
for (let i = 0; i < allSliders.length; i++) {
    allSliders[i].addEventListener("change", function (e) {
        console.log(e);
        // element on which event occured
        let elem = e.currentTarget;
        let newSize = elem.value;
        ctx.lineWidth=newSize;
    })
}

