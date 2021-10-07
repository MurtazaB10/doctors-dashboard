import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function AddProductModal(props) {
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
      .post("/common/addProduct", data)
      .then((response) => {
        setConfirmationSnackbarMessage("New Product added succesfully!");
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
      aria-labelledby=""
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Products
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
                  Product Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Product Name"
                  {...register("name", {
                    required: "Product Name is required",
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
                  placeholder="Enter Product Description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
              </div>

              <p className="formErrors">{errors.cost?.message}</p>

              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Cost<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="cost"
                  className="form-control"
                  placeholder="Enter Product Cost"
                  {...register("cost", {
                    required: "Cost is Required",
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

export default AddProductModal;
