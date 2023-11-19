import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../DataTable/DataTable";
import "./products.scss";
import { products } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import Add from "../Add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, align: "center" },
  {
    field: "img",
    headerName: "Image",
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
    field: "title",
    headerName: "Title",
    width: 100,
    editable: true,
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
    editable: true,
  },
  {
    field: "producer",
    headerName: "Producer",
    align: "center",
    width: 200,
    headerAlign: "center",
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",

    width: 100,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Created At",

    width: 100,
    editable: true,
  },
  { field: "inStock", headerName: "In Stock", type: "boolean" },
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
          <Link to={"/products/" + params.row.id}>
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
const Products = () => {
  const [open, setOpen] = useState(false);
  // function onHandleSetOpen(event) {
  //  event.preventDefault();
  // }

  return (
    <div className="products">
      <div className="info">
        <h1 className="heading">Products</h1>
        <button className="addProduct" onClick={() => setOpen(true)}>
          Add New Product
        </button>
      </div>

      <DataTable columns={columns} rows={products} />
      {open && (
        <Add header="Product" inputFields={columns} onSetOpen={setOpen} />
      )}
    </div>
  );
};
export default Products;
