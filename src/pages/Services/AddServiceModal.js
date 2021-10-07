import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function AddServiceModal(props) {
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
      .post("/common/addService", data)
      .then((response) => {
        setConfirmationSnackbarMessage("New Service added succesfully!");
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
      id="addproModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Service
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
              <p className="formErrors">{errors.price?.message}</p>

              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Price<sup>*</sup>
                </label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="Enter Price"
                  {...register("price", {
                    required: "Price is required",
                  })}
                />
              </div>
              <p className="formErrors">{errors.dr_commission?.message}</p>

              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Doctor's Commision<sup>*</sup>
                </label>
                <input
                  type="number"
                  name="dr_commission"
                  className="form-control"
                  placeholder="Enter Doctor's Commision"
                  {...register("dr_commission", {
                    required: "Doctor's Commision is required",
                  })}
                />
              </div>
              <p className="formErrors">{errors.bawe_commission?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Bawe's Commision<sup>*</sup>
                </label>
                <input
                  type="number"
                  name="bawe_commission"
                  className="form-control"
                  placeholder="Enter Bawe's Commision"
                  {...register("bawe_commission", {
                    required: "Bawe's Commision is required",
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

export default AddServiceModal;
