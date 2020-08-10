function createBox(){
    let stickyPad = document.createElement("div");
    let navBar = document.createElement("div");
    let close = document.createElement("div");
    let minimize = document.createElement("div");
    let textbox = document.createElement("div");

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
    document.body.appendChild(stickyPad);

    return {
        stickyPad,
        navBar,
        close,
        minimize,
        textbox
    }
}