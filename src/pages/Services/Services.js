import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setServicesList } from "../../redux/actions/serviceListActions";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import AddServiceModal from "./AddServiceModal";
import Snackbar from "../../components/Alert/SnackBar";
function ServicesList() {
  const dispatch = useDispatch();
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);
  const [trigger, setTrigger] = useState(false);
  const [nameTerm, setNameTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    try {
      const result = await axios.get("nurse/serviceList");
      dispatch(setServicesList(result.data.data));
      setSearchResults(result.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  const servicesList = useSelector((state) => state.servicesList.services);
  useEffect(() => {
    fetchData();
  }, [trigger]);

  useEffect(() => {
    try {
      const results = servicesList.filter((service) => {
        return service.name.toLowerCase().includes(nameTerm.toLowerCase());
      });

      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  }, [nameTerm]);

  return (
    <>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xxl-12 col-lg-12">
              {/* Panel Projects Status */}
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule pt-3">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <h3 className="panel-title">Service list</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center m-0">
                    <div className="col-md-8 text-left">
                      <div className="row align-items-center mt-3 filter-btn-row">
                        <div className="col-md-6">
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Service Name"
                              onChange={(event) => {
                                setNameTerm(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <a href className="btn btn-gradient-primary w-100">
                            Search
                          </a>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn-raised btn btn-danger btn-floating position-static"
                            data-toggle="modal"
                            data-target="#addproModal"
                          >
                            <i
                              className="icon mdi mdi-plus"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <TableContainer component={Paper}>
                  <Table aria-label="a simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="center">Doctor's Commision</TableCell>
                        <TableCell align="center">Bawe's Commision</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {searchResults.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">
                            {row.description}
                          </TableCell>
                          <TableCell align="left">{row.price}</TableCell>
                          <TableCell align="center">
                            {row.dr_commission}
                          </TableCell>
                          <TableCell align="center">
                            {row.bawe_commission}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddServiceModal
        setTrigger={setTrigger}
        setConfirmationSnackbarMessage={setConfirmationSnackbarMessage}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </>
  );
}
export default ServicesList;
