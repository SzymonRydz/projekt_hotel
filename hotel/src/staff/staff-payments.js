import React, { useState } from "react";
import ScrollTable from "./Scroll-table";
import "./style-payment.css"
import { waiting, finished, returned } from "./fakePayData";


// Elementowy komponent, który przyjmuje obiekt i zwraca HTML kontenera
function paymentList(arr) {
  return (
    <div className='PayListElement'>
      <div className='ElementLine1'>
        <p>Pokój: {arr.roomNumber}</p>
        <p>{arr.paymentStatus}</p>
      </div>
        <p>{arr.startDate} - {arr.endDate}</p>
    </div>
  );
}


function paymentFilters(setFilter) {
  return (
    <div className='paySortFilters'>
        <div className="filter">
        <p>Filtruj:</p>
        <p className="typer" onClick={() => setFilter(waiting)}>Oczekujące</p>
        <p className="typer" onClick={() => setFilter(finished)}>Zakończone</p>
        <p className="typer" onClick={() => setFilter(returned)}>Zwrócone</p>
        </div>
        <div className="filter">
        <p>Sortuj według:</p>
        <select className="selectSort" onChange={(e) => setFilter(e.target.value)}>
          <option value="sort">Od najnowszych - początek</option>
          <option value="sort">Od najstarszych - początek</option>
          <option value="sort">Od najnowszych - koniec</option>
          <option value="sort">Od najstarszych - koniec</option>
        </select>
        </div>
    </div>
  );
}



function StaffPaymentsMain() {
  let [filterVar, setFilter] = useState(waiting);

  return (
    <div className='PayMain'>
        <ScrollTable
          arr={filterVar}
          title="Oczekujące rachunki"
          placeholderString="Szukaj rachunku"
          classSearch="BillListSearcher"
          classArr="BillListElement"
          ClassList="BillListMain"
          function1={paymentList} // Poprawne przekazanie funkcji paymentList
          function2={() => paymentFilters(setFilter)} // Pass setFilter to paymentFilters function
        />
    </div>
  );
}

export default StaffPaymentsMain;
