import { GridColDef } from "@mui/x-data-grid";
import { Dispatch, useState } from "react";
import "./add.scss";

type props = {
  header: string;
  inputFields: GridColDef[];
  onSetOpen: Dispatch<React.SetStateAction<boolean>>;
};
type formData = {
  [key: string]: string;
};

function Add(props: props) {
  const [formData, setFormData] = useState<formData>({});
  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    props.onSetOpen(false);
    console.log(formData);
  };
  const onHandleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="add">
      <div className="modal">
        <div className="modal-header">
          <span className="close" onClick={() => props.onSetOpen(false)}>
            X
          </span>
          <h1 className="heading">Add new {props.header}</h1>
        </div>

        <form action="" className="form" onSubmit={onHandleSubmit}>
          {props.inputFields
            .filter(
              (inputField) =>
                !(inputField.field === "id" || inputField.field === "avatar")
            )
            .map((inputField, index) => {
              return (
                <div className="inputField" key={index}>
                  <label>{inputField.headerName}</label>
                  <input
                    placeholder={inputField.field}
                    name={inputField.field}
                    type="text"
                    onChange={onHandleChange}
                    value={formData[inputField.field]}
                  ></input>
                </div>
              );
            })}
          <button type="button" className="submit" onClick={onHandleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
