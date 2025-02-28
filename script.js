document.addEventListener("DOMContentLoaded", function () {
    let title = document.querySelector("header h1");
    let text = title.innerText;
    title.innerText = "";

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});

// تأثير زر التحميل عند النقر
document.querySelector(".download-btn").addEventListener("click", function (event) {
    event.preventDefault();
    let button = this;

    button.innerText = "Downloading...";
    button.style.background = "linear-gradient(45deg, #FFAA00, #FFD700)";
    button.style.boxShadow = "0px 5px 20px rgba(255, 215, 0, 1)";
    button.style.transform = "scale(1.15)";
    
    setTimeout(function () {
        window.location.href = "https://www.mediafire.com/file/jtwtvg4fhd60iey/SAMO.Convert.apk/file";
    }, 1500);
});

// تأثير ظهور الميزات عند التمرير
document.addEventListener("scroll", function () {
    let features = document.querySelector(".feature-box");
    let position = features.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;
    
    if (position < screenHeight - 50) {
        features.style.opacity = "1";
        features.style.transform = "translateY(0px)";
    }
});