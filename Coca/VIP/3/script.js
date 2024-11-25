// JavaScript для работы с PIN-кодом

// Элементы
const pinInput = document.querySelector(".pin-input input");
const numberButtons = document.querySelectorAll(".btn-number a");
const clearButton = document.querySelector(".siti3 .btn-number:first-child a"); // "C" для очистки
const deleteButton = document.querySelector(".siti3 .btn-number:last-child a img"); // "X" для удаления
const unlockButton = document.querySelector(".unlock-btn button");

// Настройки
const correctPin = "1234"; // Задаем правильный PIN

// Функция для добавления символа в PIN
function addDigit(digit) {
    if (pinInput.value.length < 4) {
        pinInput.value += digit;
    }
}

// Функция для очистки PIN
function clearPin() {
    pinInput.value = "";
}

// Функция для удаления последнего символа
function deleteLastDigit() {
    pinInput.value = pinInput.value.slice(0, -1);
}

// Функция для проверки PIN
function unlock() {
    if (pinInput.value === correctPin) {
        alert("Unlocked successfully!");
        clearPin();
    } else {
        alert("Incorrect PIN. Try again.");
        clearPin();
    }
}

// Добавление событий для кнопок
numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Предотвращаем переход по ссылке
        addDigit(button.textContent);
    });
});

clearButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearPin();
});

deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    deleteLastDigit();
});

unlockButton.addEventListener("click", (e) => {
    e.preventDefault();
    unlock();
});
