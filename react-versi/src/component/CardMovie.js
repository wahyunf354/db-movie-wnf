import React from "react";

const CardMovie = ({ movie }) => {
  return (
    <div className="max-w-sm card shadow-lg rounded overflow-hidden">
      <img src={movie.Poster} alt="" className="w-full" />
      <h1 className="text-medium font-bold px-4 pt-4 pb-1 text-green-500">
        {movie.Title}
      </h1>
      <p className="px-4 pb-2 text-xs font-w300">{movie.Year}</p>
      <button className="hover:bg-green-600 rounded bg-green-500 hover:bg-green-600 py-1 px-2 mx-4 my-1 mb-4 text-white text-sm shadow-md">
        Show Detail
      </button>
    </div>
  );
};

export default CardMovie;
