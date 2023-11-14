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
  };
  const onHandleChange = (e: any) => {
    if (e.target.type === "checkbox") {
      if (e.target.id === "false") {
        setFormData({ ...formData, [e.target.name]: "false" });
        return;
      }
      setFormData({ ...formData, [e.target.name]: "true" });
      return;
    }
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
                !(
                  inputField.field === "id" ||
                  inputField.field === "img" ||
                  inputField.field === "action"
                )
            )
            .map((inputField, index) => {
              return (
                <div
                  className={`inputField ${
                    inputField.type === "boolean" && "checkbox"
                  }`}
                  key={index}
                >
                  <label>{inputField.headerName}:</label>

                  <input
                    placeholder={inputField.field}
                    name={inputField.field}
                    id="true"
                    type={
                      inputField.field === "inStock" ||
                      inputField.field === "verified"
                        ? "checkbox"
                        : "text"
                    }
                    onChange={onHandleChange}
                    value={
                      formData[inputField.field]
                        ? formData[inputField.field].toString()
                        : ""
                    }
                  ></input>
                  {inputField.type === "boolean" && (
                    <label htmlFor={inputField.field}>True</label>
                  )}
                  {inputField.type === "boolean" && (
                    <>
                      <input
                        placeholder={inputField.field}
                        name={inputField.field}
                        id="false"
                        type="checkbox"
                        onChange={onHandleChange}
                        value={
                          formData[inputField.field]
                            ? formData[inputField.field].toString()
                            : ""
                        }
                      ></input>
                      <label htmlFor={inputField.field}>False</label>
                    </>
                  )}
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
