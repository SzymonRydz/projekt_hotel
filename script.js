// Funkcja do ładowania zawartości
async function loadContent(url, target) {
    try {
        const contentContainer = document.querySelector(target);
        
        // Wyświetl spinner przed załadowaniem nowej zawartości
        contentContainer.innerHTML = '<div class="loading-spinner"></div>';

        const response = await fetch(url); // Pobierz zawartość
        if (!response.ok) {
            throw new Error(`Błąd: ${response.status}`);
        }

        const html = await response.text(); // Pobierz tekst HTML
        contentContainer.innerHTML = html; // Wstaw nową treść do kontenera
    } catch (error) {
        document.querySelector(target).innerHTML = `<p style="color: red;">Nie udało się załadować zawartości: ${error.message}</p>`;
    }
}

// Funkcja przywracająca domyślną treść strony głównej
function loadDefaultHome() {
    loadContent("home.html", "#content"); // Pobierz zawartość z pliku home.html
}

// Event listener dla przycisków nawigacji
document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("content");

    // Ładuj stronę główną po załadowaniu strony
    loadDefaultHome();

    // Obsługa kliknięcia w "Logowanie"
    document.getElementById("load-login").addEventListener("click", (e) => {
        e.preventDefault();
        loadContent("login.html", "#content");
    });

    // Obsługa kliknięcia w "Strona główna"
    document.getElementById("load-home").addEventListener("click", (e) => {
        e.preventDefault();
        loadDefaultHome(); // Przywróć treść strony głównej
    });
});
