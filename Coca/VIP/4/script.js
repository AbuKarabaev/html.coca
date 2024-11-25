// Элементы для обновления времени и даты
const timeElement = document.querySelector(".date-wrap h1 a");
const periodElement = document.querySelector(".date-wrap h2 a");
const dateElement = document.querySelector(".monthday p a");

// Функция для форматирования времени и даты
function updateDateTime() {
    const now = new Date();
    
    // Получение времени
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    // Форматирование времени
    const formattedHours = hours % 12 || 12; // Преобразование в 12-часовой формат
    const formattedMinutes = minutes.toString().padStart(2, "0");

    // Установка времени
    timeElement.textContent = `${formattedHours}:${formattedMinutes}`;
    periodElement.textContent = period;

    // Получение и форматирование даты
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const dayName = dayNames[now.getDay()];

    // Установка даты
    dateElement.textContent = `${dayName}, ${day.toString().padStart(2, "0")} ${month} ${year}`;
}

// Обновление времени и даты каждую секунду
setInterval(updateDateTime, 1000);

// Инициализация при загрузке
updateDateTime();
