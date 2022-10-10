import { editSubmission } from "../utils/api";
import { useState } from "react";

function EditNotes({ notes, setEditingNotes, id }) {
  const [newNotes, setNewNotes] = useState(notes);
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      notes: newNotes,
    };
    const abortController = new AbortController();
    editSubmission(data, id, abortController.signal)
      .then(console.log)
      .then(() => setEditingNotes(false))
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }

  function handleChange(e) {
    setNewNotes(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <label></label> */}
      <textarea
        value={newNotes}
        onChange={handleChange}
        className="w-full bg-card-hover"
      ></textarea>
      <div className="flex justify-end">
        <button
          className="border rounded px-3 border-slate-300 hover:bg-card-hover"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditNotes;
