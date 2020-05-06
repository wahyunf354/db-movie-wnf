import React, { useState, useEffect } from "react";
import CardMovie from "./component/CardMovie";
import SearchMovie from "./component/SearchMovie";

const endpoint = `http://www.omdbapi.com/?apikey=d22ab146`; // you need generet apikey

function App() {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState("naruto");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${endpoint}&s=${search}`)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res.Search);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <SearchMovie setSearch={(text) => setSearch(text)} />
      {!isLoading && (
        <div className="grid grid-cols-3 gap-4">
          {movies.map((movie) => (
            <CardMovie movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
