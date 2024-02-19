export function EditProjectModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary "
        data-bs-toggle="modal"
        data-bs-target="#EditProjectModal"
      >
        Edit Project
      </button>

      <div
        className="modal fade"
        id="EditProjectModal"
        role="dialog"
        aria-labelledby="EditProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EditProjectModalLabel">
                Edit Project
              </h5>
            </div>
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </>
  );
}
