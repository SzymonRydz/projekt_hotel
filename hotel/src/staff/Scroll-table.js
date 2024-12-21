import React from "react";

// elastyczny komponent, czyli funkcja wywołująca tablicę z danymi i możliwością wyszukiwania
function ScrollTable({ arr, title, placeholderString, classSearch, classArr, ClassList, headStatus, onRoomClick, function1, function2}) {
    // arr - tablica z danymi
    // title - tytuł komponentu
    // placeholderString - placeholder dla inputa
    // classSearch - klasa dla inputa
    // classArr - klasa dla elementów tablicy
    // headStatus - klasa dla nagłówka (tytuł i wyszukiwarka - czy chcemy aby był pod sobą czy może obok?)
    // onRoomClick - funkcja obsługująca kliknięcie na element
    // function1 - funkcja, która ma wyświetlać kontener na podstawie indeksu

    // obsługa wyszukiwarki:
    const [searchTerm, setSearchTerm] = React.useState(""); // Wartość wyszukiwania
    const filteredItems = arr.filter(item => {
        // Zakładając, że `item` ma właściwość `name`, `roomNumber` itp.
        // Zmienią je na odpowiednie dla twojej struktury danych
        return Object.values(item).some(val =>
            val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    }); // Filtruj elementy pasujące do wyszukiwania

    // Obsługa kliknięcia na element i przekazanie go do komponentu nadrzędnego
    const handleClick = (item, index) => {
        if (onRoomClick) {
            onRoomClick(item); // Przekazanie klikniętego pokoju do komponentu nadrzędnego
        }
        if (function1) {
            function1(item, index); // Wywołanie funkcji1 z elementem i indeksem
        }
    };
    
    // zwracamy wyświetlanie komponentu:
    return (
        <div className={ClassList}>
            <div className={headStatus}>
                <h2>{title}</h2>
                <input
                    type="text"
                    placeholder={placeholderString}
                    className={classSearch}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div><div>
              {function2 && function2()} {/* Sprawdzamy, czy funkcja jest dostępna, i jeśli tak, wywołujemy ją */}
            </div>
            <ul>
                {(filteredItems.length === 0 ? arr : filteredItems).map((item, index) => (
                    <li
                        className={classArr}
                        key={index}
                        onClick={() => handleClick(item, index)} // Obsługa kliknięcia z indeksem
                    >
                        {function1 ? function1(item, index) : item} {/* Wyświetlanie kontenera za pomocą function1 */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ScrollTable;
