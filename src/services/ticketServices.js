export const getAllTickets = () => {
  return fetch(
    `http://localhost:8088/serviceTickets?_embed=employeeTickets`
  ).then((res) => res.json());
};

export const getTicketsByUserId = () => {
  return fetch("http://localhost:8088/employeeTickets?_expand=employee").then(
    (res) => res.json()
  );
};
