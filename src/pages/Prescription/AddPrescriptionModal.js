import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
function AddPrescriptionModal(props) {
  const {
    setTrigger,
    setConfirmationSnackbarOpen,
    setConfirmationSnackbarMessage,
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const result = await axios
      .post("/common/addPrescription", data)
      .then((response) => {
        setConfirmationSnackbarMessage("New Prescription added succesfully!");
        setConfirmationSnackbarOpen(true);
        setTrigger(true);
      })
      .catch((err) => {
        setConfirmationSnackbarMessage("Failed to Save!");
        setConfirmationSnackbarOpen(true);
      });
  };
  return (
    <div
      className="modal fade"
      id="prescriptionModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Prescription
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
              <p className="formErrors">{errors.name?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", {
                    required: "* Name is required",
                    pattern: {
                      value: /^[a-zA-Z ]*$/,
                      message: "Alphabets are only allowed",
                    },
                  })}
                />
              </div>
              <p className="formErrors">{errors.description?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Description<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Enter description"
                  {...register("description", {
                    required: "description is required",
                  })}
                />
              </div>
              <p className="formErrors">{errors.manufacturer?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Manufacturer<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="manufacturer"
                  className="form-control"
                  placeholder="Enter manufacturer"
                  {...register("manufacturer", {
                    required: "manufacturer is required",
                  })}
                />
              </div>
              <p className="formErrors">{errors.note?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Note<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="note"
                  className="form-control"
                  placeholder="Enter Note"
                  {...register("note", {
                    required: "Note is required",
                  })}
                />
              </div>

              <button type="submit" className="btn btn-gradient-primary mr-2">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPrescriptionModal;
