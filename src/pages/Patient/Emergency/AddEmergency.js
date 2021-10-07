import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
function AddEmergency(props) {
  const {
    id,
    setTrigger,
    trigger,
    setConfirmationSnackbarOpen,
    setConfirmationSnackbarMessage,
  } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post("/nurse/addPatientDocument", data)
      .then((response) => {
        setConfirmationSnackbarMessage("Patient Document succesfully added!");
        setConfirmationSnackbarOpen(true);
        setTrigger(!trigger);
      })
      .catch((err) => {
        setConfirmationSnackbarMessage("Failed to Save!");
        setConfirmationSnackbarOpen(true);
      });
  };
  return (
    <div
      className="modal fade"
      id="add-recordModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Emergency
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
            <form
              className="forms-sample"
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
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

              <p className="formErrors">{errors.emailaddress?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleTextarea1">
                  Email Address<sup>*</sup>
                </label>
                <input
                  type="email"
                  name="emailaddress"
                  className="form-control"
                  placeholder="Email Address"
                  {...register("emailaddress", {
                    required: "* Email Address is required",
                  })}
                />
              </div>

              <p className="formErrors">{errors.telephonenumber?.message}</p>

              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Telephone Number<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="telephonenumber"
                  className="form-control"
                  placeholder="Telephone Number"
                  {...register("telephonenumber", {
                    required: "Telephone Number is required",
                  })}
                />
              </div>
              <p className="formErrors">{errors.mobilenumber?.message}</p>

              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Mobile Number<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="mobilenumber"
                  className="form-control"
                  placeholder="Mobile Number"
                  {...register("mobilenumber", {
                    required: "Mobile Number is required",
                  })}
                />
              </div>
              <button type="submit" className="btn btn-gradient-primary mr-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmergency;
