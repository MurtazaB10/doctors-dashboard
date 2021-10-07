import React, { useState, useEffect } from "react";
import axios from "axios";
import AddDoctorNoteModal from "./AddDoctorNoteModal";
import timeDifference from "../../../utils/timeDifference";
import Snackbar from "../../../components/Alert/SnackBar";
import { useSelector } from "react-redux";
function DoctorsNotes({ id }) {
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [docNotes, setDocNotes] = useState([]);
  const doctorsList = useSelector((state) => state.doctorsList.doctors);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  async function fetchData() {
    setLoading(false);
    try {
      const res = await axios.post(`/nurse/patientDocNote/${id}`);
      setDocNotes(res.data.data.patientDocNote);
      setLoading(true);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }

  function getDocName(id) {
    const doctor_name = doctorsList.filter((elem, ind) => {
      return elem._id === id;
    });
    return doctor_name;
  }

  function editNote() {}

  function deleteNote() {}

  useEffect(() => {
    fetchData();
  }, [id, trigger]);
  return (
    <div class="tab-pane fade" id="patienttab2" role="tabpanel">
      <div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="panel ">
              <div className="row">
                <div className="col-md-10 m-auto">
                  <div className="p-5">
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn-raised btn btn-danger btn-floating "
                        data-toggle="modal"
                        data-target="#addnoteModal"
                      >
                        <i className="icon mdi mdi-plus" aria-hidden="true" />
                      </button>
                    </div>

                    {docNotes &&
                      docNotes.map((note, idx) => {
                        const doc = getDocName(note.doctor_id);
                        return idx % 2 == 0 ? (
                          <ul className="timeline mt-2">
                            <li>
                              <div className="timeline-badge info">
                                <i className="mdi mdi-check" />
                              </div>
                              <div className="timeline-panel">
                                <p className="time-box">
                                  <small className="text-muted">
                                    <i className="mdi mdi-av-timer" />{" "}
                                    {timeDifference(
                                      new Date(),
                                      new Date(note.date)
                                    )}
                                  </small>
                                </p>
                                <div className="timeline-body">
                                  <p className="mb-3">{note.note}</p>
                                </div>
                                <p className="notes-edit">
                                  {/* <a onClick={editNote}>
                                    Edit <i className="mdi mdi-pencil" />
                                  </a>{" "}
                                  |{" "}
                                  <a onClick={deleteNote}>
                                    Delete <i className="mdi mdi-delete" />
                                  </a>{" "} */}
                                  &nbsp;{" "}
                                  <span>
                                    Noted By{" "}
                                    <i className="mdi mdi-file-document-box" />:
                                    Dr.
                                    {doc.length !== 0 && doc[0].name}
                                  </span>
                                </p>
                              </div>
                            </li>
                          </ul>
                        ) : (
                          <ul className="timeline mt-0">
                            <li className="timeline-inverted">
                              <div className="timeline-badge info">
                                <i className="mdi mdi-check" />
                              </div>
                              <div className="timeline-panel">
                                <p className="time-box">
                                  <small className="text-muted">
                                    <i className="mdi mdi-av-timer" />{" "}
                                    {timeDifference(
                                      new Date(),
                                      new Date(note.date)
                                    )}
                                  </small>
                                </p>
                                <div className="timeline-body">
                                  <p className="mb-3">{note.note}</p>
                                </div>
                                <p className="notes-edit">
                                  {/* <a href>
                                    Edit <i className="mdi mdi-pencil" />
                                  </a>{" "}
                                  |{" "}
                                  <a href>
                                    Delete <i className="mdi mdi-delete" />
                                  </a>{" "} */}
                                  &nbsp;{" "}
                                  <span>
                                    Noted By{" "}
                                    <i className="mdi mdi-file-document-box" />:
                                    Dr
                                    {doc.length !== 0 && doc[0].name}
                                  </span>
                                </p>
                              </div>
                            </li>
                          </ul>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddDoctorNoteModal
        id={id}
        setTrigger={setTrigger}
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

export default DoctorsNotes;
