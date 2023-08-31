export const User = ({ customerObj }) => {
  return (
    <div>
      <div>
        <div>Name</div>
        <div>{customerObj.fullName}</div>
      </div>
      <div>
        <div>Email</div>
        <div>{customerObj.email}</div>
      </div>
    </div>
  );
};
