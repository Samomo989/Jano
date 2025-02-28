// تأثير الكتابة المتحركة في العنوان
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

// تأثير عند الضغط على زر التحميل
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

// تأثير الظهور عند التمرير (للميزات)
document.addEventListener("scroll", function () {
    let features = document.querySelectorAll(".feature-box");
    features.forEach((feature) => {
        let position = feature.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        
        if (position < screenHeight - 50) {
            feature.style.opacity = "1";
            feature.style.transform = "translateY(0px)";
        }
    });
});