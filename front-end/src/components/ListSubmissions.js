import { listSubmissions } from "../utils/api";
import { useEffect, useState } from "react";
import SubmissionCard from "./SubmissionCard";
import SearchSortMenu from "./SearchSortMenu";

function ListSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  useEffect(loadDashboard, []);

  function loadDashboard() {
    const abortController = new AbortController();
    listSubmissions(abortController.signal)
      .then(setSubmissions)
      .catch((err) => console.log(err));
    return () => abortController.abort();
  }

  const submissionList = submissions.map((submission) => (
    <SubmissionCard key={submission._id} submission={submission} />
  ));
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">List Submissions</h1> */}
      <SearchSortMenu />
      {submissionList}
    </>
  );
}

export default ListSubmissions;
