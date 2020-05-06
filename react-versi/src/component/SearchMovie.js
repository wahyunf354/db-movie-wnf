import React, { useState } from "react";

const SearchMovie = ({ setSearch }) => {
  const [text, setText] = useState("");

  const hendelChange = (e) => {
    setText(e.target.value);
  };

  const hendelSubmit = () => {
    setSearch(text);
  };

  return (
    <div className="flex flex-row justify-center items-center max-w-xl">
      <input
        type="text"
        className="border rounded border-solid border-gray-300 my-3 w-full py-2 px-3 mr-4 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search"
        onChange={hendelChange}
      />
      <button
        className="bg-green-500 py-2 px-4 rounded text-white text-sm"
        onClick={hendelSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchMovie;
