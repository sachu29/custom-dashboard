import React from "react";

const FormInputs = () => {
  const save = () => {
    // document.querySelector(".form-container").style.display = "none";
  };
  return (
    <>
      <div className="form-container">
        <form className="modal-window">
          <div>
            <label htmlFor="dashboard-name">Dashboard Name</label>
            <input
              type="text"
              name="dashboard-name"
              placeholder="Enter Dashboard Name..."
              id="dashboard-name"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label htmlFor="group-name">Group Name</label>
            <input
              type="text"
              name="group-name"
              placeholder="Enter Group Name..."
              id="group-name"
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              placeholder="Enter  Description..."
              id="description"
              autoComplete="off"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-save"
            id="save-btn"
            onClick={save}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default FormInputs;
