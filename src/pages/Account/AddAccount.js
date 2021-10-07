import React from "react";

function AddAccount() {
  return (
    <div
      class="modal fade"
      id="addproModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add Service
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="forms-sample">
              <div class="form-group">
                <label for="exampleInputName1">Patient Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Patient Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputName1">Select Doctor</label>
                <div>
                  <select class="form-control" id="select-new2">
                    <option>Doctor1</option>
                    <option>Doctor2</option>
                    <option>Doctor3</option>
                    <option>Doctor4</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleTextarea1">Select Date</label>
                <input
                  type="text"
                  class="form-control"
                  id="datepicker1"
                  placeholder="Select Date"
                />
              </div>

              <div class="form-group">
                <label for="exampleInputName1">Time Slot</label>
                <div>
                  <select class="form-control" id="select-new3">
                    <option>9:00 AM - 9:30 AM</option>
                    <option>9:30 AM - 10:00 AM</option>
                    <option>10:00 AM - 10:30 AM</option>
                    <option>10:30 AM - 11:00 AM</option>
                    <option>11:00 AM - 11:30 AM</option>
                    <option>11:30 AM - 12:00 AM</option>
                  </select>
                </div>
              </div>

              <button type="submit" class="btn btn-gradient-primary mr-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
