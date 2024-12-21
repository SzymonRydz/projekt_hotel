let roomType = 'Pokój jednoosobowy';
let roomPrice = 100;
let roomAccess = 'wolny';
let paymentStatus = 'opłacone';
let guests = 'Szymon, Rower Szymona';
/*
let roomEvents = "wydarzenia";
let roomMess = "wiadomości";
*/
let roomEvents = [];
for (let i = 0; i < 100; i++) {
  roomEvents.push("Wydarzenie nr " + i);
}
let roomMess = [];
for (let i = 0; i < 100; i++) {
  roomMess.push("Wiadomość nr " + i);
}

export default roomType;
export { roomPrice };
export { roomAccess };
export { paymentStatus };
export { guests };
export { roomEvents };
export { roomMess };
