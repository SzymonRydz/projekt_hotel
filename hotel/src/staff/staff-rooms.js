import React, { useState } from "react";
import './style-rooms.css';
import roomType, { roomPrice, roomAccess, paymentStatus, guests, roomEvents, roomMess } from './staff-rooms-data';
import ScrollTable from "./Scroll-table";

function RoomList({ setSelectedRoom }) { // Przyjmowanie setSelectedRoom jako props

  //TEMP DATA - NEED API
  const rooms = []; // Deklaracja pustej tablicy pokoi (do zastąpienia później na tablice z API)
  for (let i = 0; i < 100; i++) {
    rooms.push(String(i));    //konwersja int na string (jak w cpp xd)
  }

  return (
    <div>
    <ScrollTable
        arr={rooms}
        title="Lista pokojów"
        placeholderString="Szukaj pokoju"
        classSearch="RoomListSearcher"
        classArr="RoomListElement"
        ClassList="RoomListMain"
        onRoomClick={setSelectedRoom} // Funkcja przekazywana do ScrollTable
      />
    </div>
  );
}

//funkcja wyświetlająca szczegóły pokoju (ten kontener po prawej stronie)
//API NEED: wysyłąnie zapytania -> wyświetlanie poszczególnych danych z pokoju
function RoomDetails({ selectedRoom }) {
  return (
    <section>
      <h2>Informacje o pokoju: {selectedRoom}</h2>
      <div className="containerSection">
        <div className='container1'>
          <div className='DetailBox'>
            <p>Typ pokoju: {roomType}</p>
          </div>
          <div className='DetailBox'>
            <p>Cena za noc: {roomPrice}</p>
          </div>
          <div className='DetailBox'>
            <p>Status dostępności: {roomAccess}</p>
          </div>
          <div>
            <ScrollTable
              arr={roomEvents}
              title="Nowe zdarzenia:"
              placeholderString="Szukaj zdarzenia"
              classSearch="ListSearcherEM"
              classArr="ListElementEM"
              ClassList="ListMainEM"
              headStatus="SearcherPositionEM"
            />
          </div>
        </div>
        <div className='container2'>
          <div className='DetailBox'>
            <p>Goście: {guests}</p>
          </div>
          <div className='DetailBox'>
            <p>Czas rezerwacji: </p>
          </div>
          <div className='DetailBox'>
            <p>Status płatności: {paymentStatus}</p>
          </div>
          <div>
            <ScrollTable
              arr={roomMess}
              title="Nowe wiadomości:"
              placeholderString="Szukaj wiadomości"
              classSearch="ListSearcherEM"
              classArr="ListElementEM"
              ClassList="ListMainEM"
              headStatus="SearcherPositionEM"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

//Główny komponent staff-rooms
//Wyświetla listę pokoi i szczegóły wybranego pokoju jako funkcja, którą później eksportujemy
function StaffRoomsMain() {
  const [selectedRoom, setSelectedRoom] = useState(""); // State to track selected room

  return (
    <main>
      <RoomList setSelectedRoom={setSelectedRoom} />
      <RoomDetails selectedRoom={selectedRoom} />
    </main>
  );
}

export default StaffRoomsMain;
