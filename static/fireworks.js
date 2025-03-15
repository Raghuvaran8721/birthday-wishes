document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let fireworks = document.createElement("div");
        fireworks.className = "fireworks";
        document.body.appendChild(fireworks);
        setTimeout(() => fireworks.remove(), 2000);
    }, 1000);
});
