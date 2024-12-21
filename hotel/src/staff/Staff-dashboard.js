import React, { useState } from 'react';
import NavigationBar from './Staff-navBar';
import StaffEventsMain from './staff-events';
import StaffReservationsMain from './staff-reservations';
import StaffRoomsMain from './staff-rooms';
import StaffMessMain from './staff-messages';
import StaffPaymentsMain from './staff-payments';

function StaffDashboard() {
  //stan przechowujący aktywną zakładkę
  const [activeTab, setActiveTab] = useState('mess');

  //funkcja renderująca komponent w zależności od wybranej zakładki (klasyczny switch)
  const renderComponent = () => {
    switch (activeTab) {
      case 'events':
        return <StaffEventsMain />;
      case 'reservations':
        return <StaffReservationsMain />;
      case 'rooms':
        return <StaffRoomsMain />;
      case 'mess':
        return <StaffMessMain />;
      case 'payments':
        return <StaffPaymentsMain />;
      default:
        return <StaffMessMain />;
    }
  };

  return (
    //kompondnt nawigacji, który zmienia zakładkę oraz jest wyświetlany
    <div>
      <NavigationBar onSelectComponent={setActiveTab} />
      {renderComponent()} 
    </div>
  );
}

export default StaffDashboard;
