function lampu(sw) {
    let pic;
    if (sw == 1) {
        pic = "image/lampuhidup.gif";
    } else if (sw == 2) {
        pic = "image/giphy.gif";
    } else {
        pic = "image/lampumati.gif";
    }
    document.getElementById("lampImage").src = pic;
}