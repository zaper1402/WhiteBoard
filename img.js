
// handling upload 
function uploadImage(){
    let fileinput = document.getElementById("file-upload");
    fileinput.click();
    fileinput.addEventListener("change",function(e){
        let selectedFile = fileinput.files[0];
        const objectURL = window.URL.createObjectURL(selectedFile);
        let img = document.createElement("img");
        img.setAttribute("src",objectURL);
        document.body.appendChild(img);
    });
}

//handling download
function downloadImg(){
    let a =  document.createElement("a");
    let url= board.toDataURL("images/png");
    a.download = "file.png";
    
}