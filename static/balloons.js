document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 3 + 3 + "s";
        document.body.appendChild(balloon);
    }
});
