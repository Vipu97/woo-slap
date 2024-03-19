import React from "react";
import { Link } from "react-router-dom";

const CreateQuestionFooter = ({ eventCode, handleSaveQuestion }) => {
  return (
    <div className="fixed bottom-0 py-2 px-6 z-10 bg-white border-t-2 border-gray-200 w-full">
      <div className="flex justify-between w-full">
        <Link
          to={`/event/${eventCode}`}
          className="font-black text-gray-600 hover:text-blue 
            py-2 px-5 rounded-3xl bg-white hover:bg-[#e0e8f2]"
        >
          Cancel
        </Link>
        <div className="flex gap-6">
          <button
            className="font-black py-2 px-5 border-2 border-gray-300 
        rounded-3xl hover:bg-gray-100"
            onClick={handleSaveQuestion}
          >
            Save
          </button>
          <button
            className="font-black text-white bg-blue py-2 px-5 
      rounded-3xl hover:bg-[#639ee5]"
          >
            Display now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionFooter;
