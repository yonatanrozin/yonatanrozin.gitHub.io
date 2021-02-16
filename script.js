function setup() {
    displayQR();
    updateMessage(visualViewport.width);
    console.log("LOADED");
}
function displayQR() {
    let QRCode = document.getElementById("QR1");
    let QRText = "https://worldofwarcraft.com/en-us/";
    let QR = qrcode(0, 'L');
    QR.addData(QRText);
    QR.make();
    let QRImg = QR.createImgTag(2,8);
    QRCode.innerHTML = QRImg;
}

function updateMessage(width) {
    let message = document.getElementById("message");
    if (width >= 600) {
        message.innerHTML = "Welcome to Yony's first webpage with responsive layout!" +
        "This page is much more interesting on mobile." +
        "Scan the QR code below to access this page on mobile!";
    } else {
        message.innerHTML = "Welcome to Yony's responsive layout ON MOBILE!!!" +
        " (or is your browser window just really small...?)"
    }
}

window.addEventListener('DOMContentLoaded', setup);