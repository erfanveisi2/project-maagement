import { useQuery } from "@apollo/client";
import { AddProjectModal } from "./AddProjectModal";
import Header from "./header";
import { GET_PROJECTS } from "../graphql/queries/projectQueries";
import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="container">
          <Header />
          <AddProjectModal />
          {data.projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
export default Projects;
