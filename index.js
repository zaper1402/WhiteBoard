let board =  document.querySelector(".board");
let stickyPad = document.querySelectorAll(".sticky-pad");
let flag = false;

    //draw tool
    const ctx = board.getContext("2d");
    ctx.lineWidth=10;
    ctx.fillStyle = "brown";
    board.height = window.innerHeight;
    board.width = window.innerWidth;
    
    window.onresize = function () {
        board.height = window.innerHeight;
        board.width = window.innerWidth;
         
    }

    //rendering
    board.addEventListener("mousedown",function(e){
        
        ctx.beginPath();
        let {top,left} = getLocation(board);
        // console.log(`mousedown ${e.clientX-left} ${e.clientY-top}`);
        ctx.moveTo(e.clientX-left,e.clientY-top);
        flag=true;
        
    });

    board.addEventListener("mousemove",function(e){
            if(flag){
                let {top,left} = getLocation(board);
                // console.log(`mousemove ${e.clientX-left} ${e.clientY-top}`);
                ctx.lineTo(e.clientX-left,e.clientY-top); 
                ctx.stroke(); 
            }
    });

    board.addEventListener("mouseup",function(e){
        flag= false;
    });
    

    function getLocation(board){
        let obj = board.getBoundingClientRect();
        console.log(obj);
        return obj;
    }

   

    
