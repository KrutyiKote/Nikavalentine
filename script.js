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
    // Пробуємо запустити музику, якщо вона ще не грає
    const audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play();
    }

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Зміна тексту
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Збільшення кнопки "Так"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    if (currentSize < 400) {
        yesButton.style.fontSize = `${currentSize * 1.4}px`;
        const currentPadding = parseFloat(window.getComputedStyle(yesButton).padding);
        yesButton.style.padding = `${currentPadding * 1.2}px ${currentPadding * 1.5}px`;
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// НАЛАШТУВАННЯ ФОНУ
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