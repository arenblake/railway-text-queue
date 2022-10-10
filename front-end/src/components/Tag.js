function Tag({ tag, handleDelete }) {
  return (
    <span className="inline-block bg-gray-200 rounded-full pl-3 pr-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      <div className="flex gap-2">
        <div className="pb-1">{tag}</div>
        <div
          onClick={handleDelete}
          className="cursor-pointer flex justify-center items-center self-center bg-gray-400 rounded-full w-4 h-4 text-center text-sm"
        >
          <div id={tag} className="pb-1">
            x
          </div>
        </div>
      </div>
    </span>
  );
}

export default Tag;
