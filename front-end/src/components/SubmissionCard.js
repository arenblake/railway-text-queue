import { Link } from "react-router-dom";

function SubmissionCard({ submission }) {
  const tags = submission.tags?.map((tag) => (
    <span
      key={tag}
      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
    >
      {tag}
    </span>
  ));
  return (
    <Link
      to={submission._id}
      className="card max-w-m w-1/2 my-3 rounded overflow-hidden shadow-lg hover:bg-card-hover"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-center mb-2">
          {submission.text}
        </div>
        <p className="text-base text-center">
          {submission.description && submission.description}
        </p>
        <div className="px-6 pt-4 pb-2">{tags}</div>
      </div>
    </Link>
  );
}

export default SubmissionCard;
