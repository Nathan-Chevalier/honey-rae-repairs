import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEmployeesById } from "../../services/employeeServices";
import { getTicketsByUserId } from "../../services/ticketServices";

export const EmployeeDetails = () => {
  const { employeeId } = useParams();

  const [employee, setEmployee] = useState({});
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    getEmployeesById(employeeId).then((data) => {
      const employeeObj = data[0];
      setEmployee(employeeObj);
    });
    getTicketsByUserId().then((ticketArray) => {
      setTickets(ticketArray);
    });
  }, [employeeId]);

  useEffect(() => {
    const employeeTicket = tickets.filter(
      (ticket) => ticket.employee.userId === parseInt(employeeId)
    );
    setFilteredTickets(employeeTicket);
  }, [employeeId, tickets]);

  return (
    <section className="employee">
      <header className="employee-header">{employee.user?.fullName}</header>
      <div>
        <span className="employee-info">Email:</span>
        {employee.user?.email}
      </div>
      <div>
        <span className="employee-info">Specialty:</span>
        {employee.specialty}
      </div>
      <div>
        <span className="employee-info">Rate:</span>${employee.rate}/hr
      </div>
      <div>Currently working on {filteredTickets.length} tickets</div>
    </section>
  );
};
