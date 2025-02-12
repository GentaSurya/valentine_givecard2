document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});

function limitTextWidth(event) {
    const input = event.target;
    const maxLength = 10;
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    span.style.fontSize = window.getComputedStyle(input).fontSize;
    span.style.fontFamily = window.getComputedStyle(input).fontFamily;
    span.textContent = input.value;
    document.body.appendChild(span);

    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }

    document.body.removeChild(span);
    document.getElementById("nextButton").style.display = input.value.length >= 3 ? "block" : "none";
}

function saveNameAndRedirect() {
    const nameInput = document.querySelector(".name").value;
    if (nameInput.length >= 3) {
        localStorage.setItem("username", nameInput);
        window.location.href = "card.html";
    }
}


// This is for card.html
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
    audio.muted = false; // Unmute
    audio.play().catch(error => console.log("Playback failed:", error));
}, 2000);

document.addEventListener("click", function(event) {
    
    let heart = document.createElement("div");
    heart.classList.add("heart");

    
    heart.style.left = `${event.clientX - 20}px`;  
    heart.style.top = `${event.clientY - 20}px`;

    
    document.body.appendChild(heart);

   
    setTimeout(() => {
        heart.remove();
    }, 2000);
});

