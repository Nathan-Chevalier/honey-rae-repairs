import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { Ticket } from "./Ticket";
import "./Tickets.css";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergency] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("tickets set");
    });
  }, []); //ONLY runs on the initial render of the component because of the empty array

  useEffect(() => {
    if (showEmergencyOnly === true) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <div>
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowEmergency(true);
          }}
        >
          Emergency
        </button>
        <div>
          <button
            className="filter-btn btn-info"
            onClick={() => {
              setShowEmergency(false);
            }}
          >
            Show All
          </button>
        </div>
      </div>
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return <Ticket ticket={ticket} key={ticket.id} name={"Joe"} />;
        })}
      </article>
    </div>
  );
};
