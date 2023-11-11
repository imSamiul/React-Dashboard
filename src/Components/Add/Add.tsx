import { GridColDef } from "@mui/x-data-grid";
import { Dispatch } from "react";

type props = {
  header: string;
  inputFields: GridColDef[];
  onSetOpen: Dispatch<React.SetStateAction<boolean>>;
};

function Add(props: props) {
  return (
    <div className="Add">
      <div className="modal">
        <span className="close" onClick={() => props.onSetOpen(false)}>
          X
        </span>
        <h1 className="heading">Add new {props.header}</h1>
        <form action="" className="form">
          {props.inputFields
            .filter(
              (inputField) =>
                !(inputField.field === "id" || inputField.field === "avatar")
            )
            .map((inputField, index) => {
              return (
                <div className="inputField" key={index}>
                  <label>{inputField.headerName}</label>
                  <input></input>
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
}

export default Add;
