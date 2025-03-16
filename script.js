function changerImage() {
    let image = document.querySelector("img");
    if (image.src.includes("image.jpg")) 
        else {
        image.src = "image.jpg";
    }
}