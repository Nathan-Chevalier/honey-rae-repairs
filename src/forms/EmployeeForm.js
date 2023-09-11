import { useNavigate } from "react-router-dom";
import { getEmployeesById, updateEmployee } from "../services/employeeServices";
import "./Form.css";
import { useState, useEffect } from "react";

export const EmployeeForm = ({ currentUser }) => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeesById(currentUser.id).then((data) => {
      const employeeInfo = data[0];
      setEmployee(employeeInfo);
    });
  }, [currentUser]);

  const handleSave = (event) => {
    event.preventDefault();
    console.log("Clicked");

    const editedEmployee = {
      id: employee.id,
      specialty: employee.specialty,
      rate: employee.rate,
      userId: employee.userId,
    };

    updateEmployee(editedEmployee).then(() => {
      navigate(`/employees/${currentUser.id}`);
    });
  };

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty:</label>
          <input
            type="text"
            value={employee.specialty}
            required
            onChange={(event) => {
              const copy = { ...employee };
              copy.specialty = event.target.value;
              setEmployee(copy);
            }}
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Hourly Rate:</label>
          <input
            type="number"
            value={employee.rate}
            required
            onChange={(event) => {
              const copy = { ...employee };
              copy.rate = event.target.value;
              setEmployee(copy);
            }}
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>
            Save Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
};
