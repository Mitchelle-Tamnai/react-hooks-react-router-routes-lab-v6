import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";

function Movie() {
  const params = useParams();
  const movieId = params.id;
  const [movies, setMovies] = useState({});
  

  useEffect(()=> {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((res) => res.json())
    .then((data) => setMovies(data))
  },[movieId])

  if(!movies.title){
    return <p>Loading...</p>
  }
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time} mins</p>
        {movies.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
