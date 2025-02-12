document.addEventListener("DOMContentLoaded", function () {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        document.getElementById("displayName").textContent = storedName;
    }
});

setTimeout(() => {
    document.getElementById("myAudio").play();
}, 2000);

setTimeout(() => {
    let audio = document.getElementById("myAudio");
    audio.muted = false;
    audio.play().catch(error => console.log("Playback failed:", error));
}, 2000);

setTimeout(() => {
    var typed = new Typed(".text", {
        strings: [
            "Will you be my Valentine? Although we have been going together for only a few months, I can honestly say that I care very much for you. I care so much that I am certain what I feel is love. I miss you when I am not with you, and when we are together I am happy."
        ],
        typeSpeed: 70,
    });
}, 3000);

function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");

    let size = Math.random() * 40 + 20;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

document.addEventListener("DOMContentLoaded", function () {
    let isDragging = false;
    const maxPops = 50;

    function createPop(x, y) {
        if (document.querySelectorAll(".pop").length >= maxPops) return;

        let pop = document.createElement("div");
        pop.classList.add("pop");

        let size = Math.random() * 20 + 80;
        let rotate = Math.random() * 60 - 30;

        pop.style.width = `${size}px`;
        pop.style.height = `${size}px`;
        pop.style.transform = `rotate(${rotate}deg)`;
        pop.style.left = `${x - size / 2}px`;
        pop.style.top = `${y - size / 2}px`;

        document.body.appendChild(pop);

        setTimeout(() => {
            pop.classList.add("pop_effect");
        }, 1500);

        setTimeout(() => {
            pop.remove();
        }, 2000);
    }

    function getTouchPosition(event) {
        return event.touches
            ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
            : { x: event.clientX, y: event.clientY };
    }

    function handleStart(event) {
        event.preventDefault();
        isDragging = true;
        let { x, y } = getTouchPosition(event);
        createPop(x, y);
    }

    function handleMove(event) {
        if (!isDragging) return;
        let { x, y } = getTouchPosition(event);
        createPop(x, y);
    }

    function handleEnd() {
        isDragging = false;
    }

    document.addEventListener("mousedown", handleStart);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);

    document.addEventListener("touchstart", handleStart);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleEnd);
});
