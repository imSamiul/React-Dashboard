import DataTable from "../../Components/DataTable/DataTable";
import "./users.scss";
const Users = () => {
  return (
    <div className="users">
      <h1 className="heading">Users</h1>
      <button className="addUser">Add New User</button>
      <DataTable />
    </div>
  );
};
export default Users;
