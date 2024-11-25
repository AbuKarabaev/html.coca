// JavaScript for clock and login actions

// Выбор кнопок
const clockInButton = document.querySelector(".wrap-btn button:first-child");
const clockOutButton = document.querySelector(".wrap-btn button:last-child");
const loginButton = document.querySelector(".login-btn button");

// Функция для действия Clock In
function handleClockIn() {
    alert("Clock in successful!");
    clockInButton.disabled = true; // Блокируем кнопку после действия
    clockInButton.style.background = "#e1e1e1";
    clockInButton.querySelector("a").style.color = "#828487";
}

// Функция для действия Clock Out
function handleClockOut() {
    alert("Clock out successful!");
    clockOutButton.disabled = true; // Блокируем кнопку после действия
    clockOutButton.style.background = "#e1e1e1";
    clockOutButton.querySelector("a").style.color = "#828487";
}

// Функция для входа (Login)
function handleLogin() {
    alert("Login successful!");
    loginButton.textContent = "Logged in"; // Меняем текст кнопки
    loginButton.style.background = "#ff5c00";
    loginButton.style.color = "#fff";
}

// Привязка обработчиков событий к кнопкам
clockInButton.addEventListener("click", handleClockIn);
clockOutButton.addEventListener("click", handleClockOut);
loginButton.addEventListener("click", handleLogin);
