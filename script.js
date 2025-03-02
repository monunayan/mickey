function showSurprise() {
    alert("Mickey, you're the most amazing friend! Thank you for all the memories ❤");
}

// Slideshow Animation
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.transform = "scale(1.1)";
    setTimeout(showSlides, 2500);
}
showSlides();

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("floating-hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Music Player Controls
let music = document.getElementById("bg-music");
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
