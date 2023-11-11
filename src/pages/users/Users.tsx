import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../Components/DataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, align: "center" },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,

    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "/noavatar.png"}
          alt=""
          className="avatar"
        />
      );
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    align: "center",
    width: 200,
    headerAlign: "center",
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",

    width: 100,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",

    width: 100,
    editable: true,
  },
  { field: "verified", headerName: "Verified", type: "boolean" },
  {
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    align: "center",
    width: 150,
    renderCell: (params) => {
      const handleUserDelete = (id: string) => {
        console.log(id + " deleted");
      };
      return (
        <div className="action">
          <Link to={"/users/" + params.row.id}>
            <img src="/view.svg" alt="" />
          </Link>
          <div
            className="delete"
            onClick={() => handleUserDelete(params.row.id)}
          >
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  },
];
const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h1 className="heading">Users</h1>
        <button className="addUser">Add New User</button>
      </div>

      <DataTable columns={columns} rows={userRows} />
    </div>
  );
};
export default Users;
