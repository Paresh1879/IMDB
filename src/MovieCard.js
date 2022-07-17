import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function Movie({ name, image, summary, director, stars, rating,deletebutton,editbutton, id }) {
  let [like, setlike] = useState(0);
  let [deslike, setdeslike] = useState(0);
  const styles = {
    color: rating >= 7.5 ? "green" : "red",
  };
 
  const history = useHistory();

  return (
    <Card id="main">
      <div className="image" onClick={() => history.push(`/movies/${id}`)}>
        <img className="img" src={image} alt={image} />
      </div>
      <CardContent id="content">
        <div className="tit" ><h2>{id}.{name}</h2><span style={styles}><i class="fa fa-star"></i> <b style={{fontSize: "22px"}}>{rating}</b>/10</span></div>
        <span>
          
          <p className="sum">  {summary}</p>
          {/* <IconButton 
          aria-label="toggle-summary" 
          color='primary' 
          onClick={() => history.push(`/movies/${id}`)}>
            <InfoIcon />
          </IconButton> */}
        </span><br />

        <div><b>Director:</b>{director}</div><br />
        <div><b>Stars:</b>{stars}</div><br />
        <CardActions className='btn'>
          <div>
            {/* like button */}
            <IconButton aria-label="delete" className='like' color="primary" onClick={() => { setlike(like + 1); }}>
              <Badge badgeContent={like} color="primary">
                <i class="fa fa-thumbs-up"></i>
              </Badge>
            </IconButton>
          </div>
          <div>
          {/* deslike button */}
            <IconButton aria-label="delete" className='deslike' color='error' onClick={() => { setdeslike(deslike + 1); }}>
              <Badge badgeContent={deslike} color="error">
                <i class="fa fa-thumbs-down"></i>
              </Badge>
            </IconButton>


          </div>
          {deletebutton} {editbutton}
        </CardActions>
      </CardContent>
    </Card>
  );

}
                  
