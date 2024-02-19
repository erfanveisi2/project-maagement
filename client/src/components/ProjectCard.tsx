import { useMutation } from "@apollo/client";
import "../index.css";
import DELETE_PROJECT from "../mutations/removeProject";
import { FaTrash } from "react-icons/fa";
import GET_PROJECTS from "../queries/projectQueries";
import { EditProjectModal } from "./EditProjectModal";

export default function ProjectCard({ project }: { project: any }) {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: project.id },
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div className="col-md-6 d-inline-block margin-top-right">
      <div className="card mb-">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
          <p>{project.description}</p>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger btn-sm"
              onClick={deleteProject as any}
            >
              <FaTrash />
            </button>
            <EditProjectModal />
          </div>
        </div>
      </div>
    </div>
  );
}
