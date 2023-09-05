import "./App.css";
import { CustomerList } from "./components/customers/CustomersList";
import { EmployeesList } from "./components/employees/EmployeesList";
import { NavBar } from "./components/nav/NavBar";
import { TicketList } from "./components/tickets/TicketList";
import { Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="employees" element={<EmployeesList />} />
      </Route>
    </Routes>
  );
};
