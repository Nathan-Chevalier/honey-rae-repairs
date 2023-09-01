import { getNonStaffUsers } from "../../services/userServices";
import { useState, useEffect } from "react";
import { User } from "../../users/User";
import "./Customers.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((user) => {
        return <User user={user} />;
      })}
    </div>
  );
};
