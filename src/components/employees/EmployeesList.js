import { getStaffUsers } from "../../services/userServices";
import { useState, useEffect } from "react";
import "./Employees.css";
import { User } from "../../users/User";

export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => {
      setEmployees(staffArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((user) => {
        return <User user={user} />;
      })}
    </div>
  );
};
