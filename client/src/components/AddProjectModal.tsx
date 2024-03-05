import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ADD_PROJECT from "../mutations/addProject";
import { GET_CLIENTS } from "../queries/clientQueries";

export function AddProjectModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [clientId, setClientId] = useState("");

  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (name === "" || description === "") {
      return alert("Please fill in all fields");
    }

    addProject();
    setName("");
    setDescription("");
    setStatus("");
    setClientId("");
  };

  if (loading) return null;
  if (error) return <p>something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary d-block"
            data-bs-toggle="modal"
            data-bs-target="#AddProjectModal"
          >
            <div className="d-flex align-items-center">
              <FaUser className="icon" />
              Add Project
            </div>
          </button>

          <div
            className="modal fade"
            id="AddProjectModal"
            role="dialog"
            aria-labelledby="AddProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="AddProjectModalLabel">
                    Add Project
                  </h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="" />
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value="">Select Client</option>
                        {data.clients.map((client: any) => (
                          <option value={client.id}>{client.name}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
