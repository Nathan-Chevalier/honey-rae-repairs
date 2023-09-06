import "./Tickets.css";
import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketServices";
import { Ticket } from "./Ticket";
import { FilterBar } from "./FilterBar";

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergency] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  };

  useEffect(() => {
    getAndSetTickets();
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

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar
        setShowEmergency={setShowEmergency}
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return (
            <Ticket
              currentUser={currentUser}
              ticket={ticket}
              getAndSetTickets={getAndSetTickets}
              key={ticket.id}
            />
          );
        })}
      </article>
    </div>
  );
};
