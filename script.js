const messages = [
    "Впевнена?",
    "Точно??",
    "Точно-точно? ❤️",
    "Сто відсотків?",
    "Прям на мільйон?",
    "Ну вот прям точно?",
    "Ну може??",
    "От може-може?",
    "Ну от подумай",
    "Прям добре-добре подумай ❤️",
    "Оу.. А ти симпатична😏😏",
    "Ставте полуницю",
    "Кіся міся"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}