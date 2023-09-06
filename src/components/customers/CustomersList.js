import { getNonStaffUsers } from "../../services/userServices";
import { useState, useEffect } from "react";
import { User } from "../../users/User";
import "./Customers.css";
import { Link } from "react-router-dom";

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
        return (
          <Link to={`/customers/${user.id}`}>
            <User user={user} />
          </Link>
        );
      })}
    </div>
  );
};
