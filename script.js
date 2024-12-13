function togglePopup(hypothesis) {
    const popup = document.getElementById(`popup-${hypothesis}`);
    if (popup.style.display === "block") {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = "none";
        }, 300); // Время совпадает с CSS-переходом
    } else {
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.opacity = 1;
        }, 10); // Небольшая задержка для плавного появления
    }
}
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        const details = this.closest('details');
        if (details) {
            details.removeAttribute('open');
        }
    });
});

document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#historical-facts"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#historical-facts').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href="#authors"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#authors').scrollIntoView({
        behavior: 'smooth'
    });
});

// Убедитесь, что элементы начально скрыты
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.opacity = 0;
        popup.style.display = "none";
    });
});
