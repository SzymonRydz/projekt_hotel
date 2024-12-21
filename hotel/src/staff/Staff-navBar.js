import React from 'react';
import { Link } from 'react-router-dom';
import './style-staff.css';

const NavigationBar = ({ onSelectComponent }) => {
  //komponent nawigacji, który pozwala na zmianę zakładki, zwiera linki do poszczególnych zakładek
  //linki same w sobie nie prowadzą nigdzie, to kliknięcie (funkcja) zmienia zakładkę
  return (
    <nav className='navBar'>
      <ul>
        <Link to='#' onClick={() => onSelectComponent('events')}>Zdarzenia</Link>
      </ul>
      <ul>
        <Link to='#' onClick={() => onSelectComponent('rooms')}>Pokoje</Link>
      </ul>
      <ul>
        <Link to='#' onClick={() => onSelectComponent('reservations')}>Rezerwacje</Link>
      </ul>
      <ul>
        <Link to='#' onClick={() => onSelectComponent('payments')}>Płatności</Link>
      </ul>
      <ul>
        <Link to='#' onClick={() => onSelectComponent('mess')}>Wiadomości</Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
