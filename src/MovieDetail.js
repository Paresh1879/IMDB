import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Button from '@mui/material/Button';

export function MovieDetail({ movielist }) {
    
  const { id } = useParams();
  const [movie, setmovie] = useState({});

  const getMovies = () => {
    fetch(`${API}/${id}`, 
    {method: "GET",}) // promise
    .then((data) => data.json()) // Response object
    .then((mvs) => setmovie(mvs))
    .catch((err) => console.log(err));
  };
  
  useEffect(() => getMovies(), []);
  const [show1, setshow1] = useState(true)
  const [show, setshow] = useState(true);
  const history = useHistory();
  return (
    <div className="box">
      <div className="tit" >
        <h2 style={{fontSize: "30px"}}>{movie.name}</h2>
        <span><i class="fa fa-star"></i> <b style={{fontSize: "22px"}}>{movie.rating}</b>/10 <b>IMDb</b></span>
      </div>
      
      <iframe
        width="100%"
        height="600px"
        src={movie.trailer}
        allowfullscreen></iframe>
      <div className='movie-details'>
        <p><span className="film" >{movie.film}</span></p><br />
        <p className="sum"><b>Summary:</b> {movie.summary}</p><hr /><br/>
        <div><b>Stars:</b> {movie.stars}</div><hr /><br/>
        <div><b>Director:</b> {movie.director}</div><hr /><br/>
        <div><b>Music:</b> {movie.music}</div><hr /><br/>
        <div><b>Stars:</b> {movie.stars}</div><hr /><br/>
        <div><b>Cast:</b> 
          <IconButton aria-label="toggle-summary" color='primary' onClick={() => setshow(!show)}>
            {!show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {!show ? <p>{movie.actorscrew}</p> : null}
        </div><hr /><br />
        <div><b>Storyline:</b> 
          <IconButton aria-label="toggle-summary" color='primary' onClick={() => setshow1(!show1)}>
            {!show1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {!show1 ? <p>{movie.story}</p> : null}
        </div><hr />
           
        
      </div>
      <Button variant="contained"
          style={{ width: "200px", margin: "20px" }}
          onClick={() => history.goBack()}>Back</Button>
    </div>
  );
}
