{/* <div class="sticky-pad">
            <div class="nav-bar">
                <div class="close"></div>
                <div class="minimize"></div>
                
            </div>
            <textarea name="" id="" cols="30" rows="10" class="textBox"></textarea>
        </div> */}

function createSticky(){
    let stickyPad = document.createElement("div");
    let navBar = document.createElement("div");
    let close = document.createElement("div");
    let minimize = document.createElement("div");
    let textbox = document.createElement("div");
    let textarea = document.createElement("textarea");

    //add styling
    stickyPad.setAttribute("class","sticky-pad");
    navBar.setAttribute("class","nav-bar");
    close.setAttribute("class","close");
    minimize.setAttribute("class","minimize");
    textbox.setAttribute("class","textbox");
    stickyPad.appendChild(navBar);
    stickyPad.appendChild(textbox);
    navBar.appendChild(minimize);
    navBar.appendChild(close);
    textbox.appendChild(textarea);
    document.body.appendChild(stickyPad);

    //close
    close.addEventListener("click",function(e){
        close.parentNode.parentNode.remove();
    });
    //minimize
    minimize.addEventListener("click", function(e){
        if(textbox.classList.contains("hide"))
                textbox.classList.remove("hide");
        else{
                textbox.classList.add("hide");
        }
    })

    //move
    let isStickyClicked=false;
    let initialX ;
    let initialY;
    //rendering
    navBar.addEventListener("mousedown",function(e){
        if(e.target == e.currentTarget){
            initialX = e.clientX;
            initialY = e.clientY;
            isStickyClicked=true; 
        }
        
    });

    navBar.addEventListener("mousemove",function(e){
        if(e.target ==e.currentTarget){
            if(isStickyClicked){
                let finalX = e.clientX;
                let finalY = e.clientY;
                let diffX = finalX-initialX ;
                let diffY =  finalY-initialY;

                let {top, right, bottom, left} = getLocation(stickyPad);
                // console.log(`mousemove ${e.clientX-left} ${e.clientY-top}`);
                stickyPad.style.top = (top + diffY) + "px";
                stickyPad.style.left =(left + diffX)+ "px";
                initialX = finalX;
                initialY = finalY;
            }
        }
    });

    navBar.addEventListener("mouseleave",function(e){
        if(e.target == e.currentTarget) isStickyClicked=false;
    });
    navBar.addEventListener("mouseup",function(e){
        if(e.target == e.currentTarget) isStickyClicked=false;
    });

}

