import Tag from "./Tag";
import { useState } from "react";
import { editSubmission } from "../utils/api";

function Tags({ tags, submission, setSubmission, id }) {
  const [newTag, setNewTag] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      tags: [...submission.tags, newTag],
    };
    const abortController = new AbortController();
    editSubmission(data, id, abortController.signal)
      .then(() => {
        setSubmission({
          ...submission,
          ["tags"]: [...submission.tags, newTag],
        });
        setNewTag("");
      })
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }

  function handleChange(e) {
    setNewTag(e.target.value);
  }

  function handleDelete(e) {
    const tags = submission.tags.filter((tag) => tag !== e.target.id);
    const data = {
      tags,
    };
    const abortController = new AbortController();
    editSubmission(data, id, abortController.signal)
      .then(() => {
        setSubmission({
          ...submission,
          ["tags"]: tags,
        });
      })
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }

  const content = tags?.map((tag) => (
    <Tag key={tag} tag={tag} handleDelete={handleDelete} />
  ));
  return (
    <div>
      <div className="flex gap-3 mb-2">
        <div className="font-bold text-md">Tags:</div>
        <form className="flex gap-3 w-full" onSubmit={handleSubmit}>
          <input
            className="w-full bg-card-hover"
            type="text"
            value={newTag}
            onChange={handleChange}
          ></input>
          <button
            type="submit"
            className="border rounded px-3 border-slate-300 hover:bg-card-hover"
          >
            Add
          </button>
        </form>
      </div>
      <div className="px-6 pt-4 pb-2">{content}</div>
    </div>
  );
}

export default Tags;
