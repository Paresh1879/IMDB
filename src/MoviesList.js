// import { movielist } from "./movielist";
import { useEffect, useState } from "react";
import { Movie } from "./MovieCard";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";


export function Movieslist() {
  
const [mvlist, setMvList] = useState([]);
const history= useHistory();

  const getMovies = () => {
    fetch(API, 
    {method: "GET",}) // promise
    .then((data) => data.json()) // Response object
    .then((mvs) => setMvList(mvs));};

    useEffect(() => getMovies(), []);

    // Delete movie -> Refresh data
    const deleteMovie = (id) => {
      fetch(`${API}/${id}`,
       {method: "DELETE",})
       .then(() => getMovies());
      };
 
 
  return (
    <div className="box">
      <h1 className="title">Top 5 Tamil movies in 2021</h1>
      <div className="container">
        {mvlist.map(
          ({ film, year, name, image, summary,director, stars, rating,id }, index) => (
            <Movie
            Id={index}
              film={film}
              year={year}
              name={name}
              image={image}
              summary={summary}
              director={director}
              stars={stars}
              rating={rating}
              deletebutton={
                <IconButton
                  aria-label="delete"
                  style={{marginLeft:"auto"}}
                  size="large"
                  color="error"
                  onClick={() => deleteMovie(id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              editbutton={
                <IconButton
                aria-label="edit"
                size="large"
                color="secondary"
                  onClick={() => 
                   history.push(`/movie/edit/${id}`)
                  }
                >
                <EditIcon />
                </IconButton>
              }
              id={id}
            />
          )
        )}
      </div>
    </div>
  );
}
