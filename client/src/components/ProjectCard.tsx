import "../index.css";

export default function ProjectCard({ project }: { project: any }) {
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
        </div>
      </div>
    </div>
  );
}
