import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../graphql/queries/projectQueries";
import EditProjectForm from "./EditProjectModal";

export function ProjectPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link
            to="/projects"
            className="btn btn-light btn-sm w-25 d-inline ms-auto"
          >
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <EditProjectForm project={data.project} />
        </div>
      )}
    </>
  );
}
