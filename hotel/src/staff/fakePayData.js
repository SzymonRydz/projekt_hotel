function generateRooms(start, count, prefix, paymentStatus, startMonth, endMonth) {
    let rooms = [];
    for (let i = 1; i <= count; i++) {
        rooms.push({
            roomNumber: prefix + i, // Numer pokoju
            paymentStatus: paymentStatus, // Status płatności
            startDate: `2024.${startMonth}.${String(i).padStart(2, '0')}`, // Data rozpoczęcia
            endDate: `2024.${endMonth}.${String(i).padStart(2, '0')}` // Data zakończenia
        });
    }
    return rooms;
}


let waiting = generateRooms(1, 20, 100, "unpaid", "01", "02");
let finished = generateRooms(1, 20, 200, "paid", "02", "03");
let returned = generateRooms(1, 20, 300, "returned", "03", "04");


export { waiting, finished, returned };