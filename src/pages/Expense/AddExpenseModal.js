import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function AddExpenseModal(props) {
  const {
    id,
    setTrigger,
    setShow,
    setConfirmationSnackbarOpen,
    setConfirmationSnackbarMessage,
  } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const [addDate, setAddDate] = useState(new Date());

  const onSubmit = async (data) => {
    const result = await axios
      .post("/common/addExpenses", data)
      .then((response) => {
        setConfirmationSnackbarMessage("Expense succesfully added!");
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
      id="addexpenseModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Expense
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
                  name="Name"
                  className="form-control"
                  placeholder="Name"
                  {...register("name", {
                    required: "* Name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/i,
                      message: "Alphabets are only allowed",
                    },
                  })}
                />
              </div>

              <p className="formErrors">{errors.date?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleTextarea1">
                  Select Date<sup>*</sup>
                </label>
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <DatePicker
                      autoComplete="off"
                      selected={field.value}
                      onChange={(date) => setAddDate(date)}
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      minDate={new Date()}
                      placeholderText="Select Date"
                      isClearable
                      {...field}
                    />
                  )}
                />
              </div>
              <p className="formErrors">{errors.amount?.message}</p>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Amount<sup>*</sup>
                </label>
                <input
                  type="number"
                  name="amount"
                  className="form-control"
                  placeholder="Enter Amount"
                  {...register("amount", {
                    required: "Amount is required",
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
              <div className="form-group">
                <label>File upload</label>
                <input
                  type="file"
                  name="image"
                  {...register("image", {
                    required: "* Image is required",
                  })}
                  className="file-upload-default"
                />
                <div className="input-group col-xs-12">
                  <input
                    type="text"
                    name="doc"
                    className="form-control file-upload-info"
                    disabled
                    placeholder="Upload Image/Video"
                  />
                  <span className="input-group-append">
                    <button
                      className="file-upload-browse btn btn-gradient-primary"
                      type="button"
                    >
                      Upload
                    </button>
                  </span>
                </div>
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

export default AddExpenseModal;
