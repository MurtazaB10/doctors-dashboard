import React, { useState } from "react";
import Snackbar from "../../components/Alert/SnackBar";
import AddAccount from "./AddAccount";

function Account() {
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [trigger, setTrigger] = useState(false);

  return (
    <section class="dashboard">
      <div class=" container-fluid p-0">
        <div class="row" data-plugin="matchHeight" data-by-row="true">
          <div class="col-xxl-12 col-lg-12">
            <div class="panel" id="projects-status">
              <div class="panel-heading appointment-schedule pt-3">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <h3 class="panel-title">Account and Permission</h3>
                  </div>
                </div>

                <button
                  type="button"
                  class="btn-raised btn btn-danger btn-floating"
                  style={{ bottom: 0 }}
                  data-toggle="modal"
                  data-target="#addproModal"
                >
                  <i class="icon mdi mdi-plus" aria-hidden="true"></i>
                </button>

                <hr />
              </div>

              <div class="table-responsive p-3">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th width="20%">ID</th>
                      <th width="20%">Date</th>
                      <th width="20%">Descriprion</th>
                      <th width="20%">Descriprion</th>
                      <th width="20%" class="text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#619</td>
                      <td>14 Nov 2019</td>
                      <td>Dental Filling</td>
                      <td>Dental Filling</td>
                      <td>
                        <div class="edit-icon">
                          <a href="#" class="white mr-10">
                            <i class="icon mdi mdi-pencil"></i>
                          </a>
                          <a href="#" class="white mr-10">
                            <i class="icon mdi mdi-delete"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#619</td>
                      <td>14 Nov 2019</td>
                      <td>Dental Filling</td>
                      <td>Dental Filling</td>
                      <td>
                        <div class="edit-icon">
                          <a href="#" class="white mr-10">
                            <i class="icon mdi mdi-pencil"></i>
                          </a>
                          <a href="#" class="white mr-10">
                            <i class="icon mdi mdi-delete"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>#619</td>
                      <td>14 Nov 2019</td>
                      <td>Dental Filling</td>
                      <td>Dental Filling</td>
                      <td>
                        <div class="edit-icon">
                          <a href="#" class="white mr-10">
                            <i class="icon mdi mdi-pencil"></i>
                          </a>
                          <a href="#" class="white mr-10">
                            <i class="icon mdi mdi-delete"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddAccount
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
    </section>
  );
}

export default Account;
