import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { readSubmission } from "../utils/api";
import EditNotes from "./EditNotes";
import Tags from "./Tags";

// Write API function for editing submission ( assign team member)
// TODO: Refactor tags into it's own component, make tags a button that deletes itself when clicked

function CardDetail() {
  const [submission, setSubmission] = useState([]);
  const [editingNotes, setEditingNotes] = useState(false);
  let { id } = useParams();
  useEffect(loadSubmission, [editingNotes]);

  function loadSubmission() {
    const abortController = new AbortController();
    readSubmission(id, abortController.signal)
      .then(setSubmission)
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }

  return (
    <div className="card max-w-m w-1/2 my-3 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center mb-2">
          {submission.text}
        </div>
        <div className="font-bold text-md mb-2">Description:</div>
        <p className="text-base mb-2">
          {submission.description && submission.description}
        </p>
        <div className="flex gap-3 mb-2">
          <div className="font-bold text-md">Notes:</div>
          <button
            onClick={() => setEditingNotes(true)}
            className="border rounded px-3 border-slate-300 hover:bg-card-hover"
          >
            Edit
          </button>
        </div>

        {editingNotes ? (
          <EditNotes
            notes={submission.notes}
            setEditingNotes={setEditingNotes}
            id={id}
          />
        ) : (
          <p className="text-base mb-2">
            {submission.notes && submission.notes}
          </p>
        )}
        <Tags
          tags={submission.tags}
          submission={submission}
          setSubmission={setSubmission}
          id={id}
        />
      </div>
    </div>
  );
}

export default CardDetail;
