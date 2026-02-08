const messages = [
    "Впевнена?",
    "Точно??",
    "Точно-точно? ❤️",
    "Оу.. А ти симпатична😏😏",
    "Прям на мільйон?",
    "Ну вот прям точно?",
    "Ставте полуницю",
    "Ну може??",
    "От може-може?",
    "Ну от подумай",
    "Прям добре-добре подумай ❤️",
    "Сто відсотків?",
    "Кіся міся"
];

let messageIndex = 0;

function handleNoClick() {
    // Якщо музика ще не грає (бо браузер заблокував автоплей) - запускаємо зараз
    const askAudio = document.getElementById("music-ask");
    if (askAudio.paused) {
        askAudio.play();
    }

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // Збільшив ліміт до 600, щоб кнопка ставала ще більшою
    if (currentSize < 600) {
        yesButton.style.fontSize = `${currentSize * 1.4}px`;
        const currentPadding = parseFloat(window.getComputedStyle(yesButton).padding);
        yesButton.style.padding = `${currentPadding * 1.2}px ${currentPadding * 1.5}px`;
    }
}

function handleYesClick() {
    // 1. Зупиняємо стару музику і включаємо нову
    const askAudio = document.getElementById("music-ask");
    const happyAudio = document.getElementById("music-happy");

    askAudio.pause();
    happyAudio.volume = 0.1;
    happyAudio.currentTime = 0;
    happyAudio.play();

    // 2. Ховаємо екран питання, показуємо екран радості
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('success-screen').style.display = 'block';

    // 3. Запускаємо конфетті
    launchConfetti();
}

// Функція конфетті
function launchConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// ФОН (Твої картинки)
const customImages = [
    'icon1.png',
    'icon2.png',
    'icon3.png'
];

function createFloatingIcons() {
    const container = document.getElementById('floating-bg');
    const iconCount = 30;

    for (let i = 0; i < iconCount; i++) {
        const img = document.createElement('img');
        const randomImg = customImages[Math.floor(Math.random() * customImages.length)];
        img.src = randomImg;
        img.classList.add('floating-item');

        img.style.left = Math.random() * 100 + 'vw';
        img.style.animationDuration = Math.random() * 9 + 6 + 's';
        img.style.animationDelay = Math.random() * 5 + 's';

        const size = Math.random() * 30 + 30;
        img.style.width = size + 'px';

        container.appendChild(img);
    }
}

window.onload = createFloatingIcons;
