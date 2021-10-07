import React, { useState } from "react";
import Snackbar from "../../../components/Alert/SnackBar";
import AddEmergency from "./AddEmergency";

function Emergency({ id }) {
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [trigger, setTrigger] = useState(false);

  return (
    <div
      class="tab-pane fade show active"
      id="Emergency"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div>
        <div class="row mt-4">
          <div class="col-xxl-12 col-lg-12">
            <div class="panel" id="projects-status">
              <div class="panel-heading appointment-schedule pb-0">
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <h3 class="panel-title pb-0">Emergency Contact List</h3>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn-raised btn btn-danger btn-floating "
                  data-toggle="modal"
                  data-target="#add-recordModal"
                >
                  <i class="icon mdi mdi-plus" aria-hidden="true"></i>
                </button>
              </div>

              <hr />

              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th width="15%">S.No</th>
                      <th width="20%">Name</th>
                      <th width="25%">Email</th>
                      <th width="20%">Telephone</th>
                      <th width="20%">Mobile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>xyz</td>
                      <td>abc@gmail.com</td>
                      <td>07564 56784</td>
                      <td>+919586743645</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>xyz</td>
                      <td>abc@gmail.com</td>
                      <td>07564 56784</td>
                      <td>+919586743645</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>xyz</td>
                      <td>abc@gmail.com</td>
                      <td>07564 56784</td>
                      <td>+919586743645</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>xyz</td>
                      <td>abc@gmail.com</td>
                      <td>07564 56784</td>
                      <td>+919586743645</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddEmergency
        id={id}
        setTrigger={setTrigger}
        trigger={trigger}
        setConfirmationSnackbarMessage={setConfirmationSnackbarMessage}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </div>
  );
}

export default Emergency;
