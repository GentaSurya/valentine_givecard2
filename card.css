@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

body {
    background: linear-gradient(180deg, rgb(200, 0, 110), rgb(255, 61, 61));
    height: 100vh;
    margin: 0;
    font-family: 'Comic Neue', cursive;
    position: relative;
    overflow: hidden;
    touch-action: none;
}

.container {    
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
}

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    background-color: rgb(255, 255, 255);
    animation: shrinkAndMove 1.5s ease-in-out forwards;
    animation-delay: 1s; 
}

.title, .name {
    font-family: 'Comic Sans MS', cursive;
    font-weight: bold;
    font-size: 2em;
    color: rgb(200, 0, 110);
    text-align: center;
}

.name::first-letter{
    text-transform: uppercase;
}

.typed-cursor {
    display: none;
}

.button {
    border-radius: 6px;
    border: 2px white solid;
    background-color: transparent;
    color: white;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    margin: 10px;
    cursor: pointer;
    height: 40px;
    width: 80px;
}

.paraf {
    opacity: 0; 
    transition: opacity 1s ease-in-out;
    animation: fadeIn 1s forwards;
    animation-delay: 3s;
    margin: 90px;
}

.text {
    padding: 15px;
    border-radius: 20px;
    border: 3px solid white;
    color: white;
    text-align: center;
    font-size: 26px;
}

.heart {
    position: absolute;
    bottom: -50px;
    background-image: url('icon/heart2.png');
    background-size: cover;
    opacity: 1;
    animation: floatUp 6s linear forwards;
    z-index: -1;
}

.pop {
    position: absolute;
    width: 40px;  
    height: 40px;
    background-image: url('icon/heart2.png'); 
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 1;
    pointer-events: none; 
    animation: floatUpPop 2s linear forwards;
}

.pop_effect {
    animation: popAnimation 0.3s ease-out forwards;
}

@keyframes floatUpPop {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    70% {
        opacity: 1;
        transform: scale(1.2);
    }
    100% {
        opacity: 0;
        transform: scale(0.5);
    }
}

@keyframes popAnimation {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.5);
        opacity: 1;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}

@keyframes floatUp {
    0% { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-100vh) scale(1.5); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes shrinkAndMove {
    0% { transform: scale(1) translateX(0); }
    100% { transform: scale(0.7) translateY(-500px); }
} 

@media (max-width: 600px) {
    html, body {
        overflow: hidden;
    }
    .card {
        border-radius: 13px;
        height: 12vw;
    }
    .title, .name {
        font-size: 23px;
    }
    .paraf {
        margin: 40px;
    }
    .text {
        padding: 10px;
        font-size: 20px;
        border-radius: 15px;
        border: 2px solid white;
    }
    .button {
        bottom: 50px;
    }
    @keyframes shrinkAndMove {
        100% { transform: scale(0.8) translateY(-480px); }
    }    
}

@media (max-width: 400px) {
    @keyframes shrinkAndMove {
        100% { transform: scale(0.8) translateY(-380px); }
    }    
}

@media screen and (orientation: landscape) and (max-height: 700px) {
    @keyframes shrinkAndMove {
        100% { transform: scale(0.80) translateY(-180px); }
    }
    .card {
        top: 40%;
    }
    .title, .name {
        font-size: 20px;
    }
    .text {
        font-size: 17px;
    }
    .button {
        bottom: 40px;
    }
}
