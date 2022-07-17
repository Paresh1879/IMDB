import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  image: yup
    .string()
    .required("Why not fill this image? 😉")
    .min(4, "Need a longer email 😄"),
  name: yup.string().required("Why not fill this name? 😉"),
  summary: yup
    .string()
    .required("Why not fill this summary? 😉")
    .min(20, "Need a longer summary 😄"),
  director: yup.string().required("Why not fill this oror name? 😉"),
  music: yup.string().required("Why not fill this music director name? 😉"),
  rating: yup.number().required("Why not fill this rating? 😉").min(0).max(10),
  trailer: yup
    .string()
    .required("Why not fill this trailer 😉")
    .min(4, "Need a longer  trailer 😄"),
  id: yup
    .number()
    .required("Why not fill this id? 😉"),
  film: yup
  .string()
  .required("Why not fill this film concept 😉")
  .min(4, "Need a longer  film concept 😄"),
  year: yup
  .number()
  .required("Why not fill this year of movie released? 😉"),
  stars: yup
  .string()
  .required("Why not fill this stars  😉")
  .min(4, "Need a longer  stars  😄"),
  actorscrew: yup
  .string()
  .required("Why not fill this actors cast 😉")
  .min(4, "Need a longer  actors cast 😄"),
  story: yup
  .string()
  .required("Why not fill this story line 😉")
  .min(20, "Need a longer  story line 😄"),
});

export function AddMovie() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      trailer: "",
      id: "",
      film: "",
      image: "",
      name: "",
      year: "",
      summary: "",
      director: "",
      stars: "",
      actorscrew: "",   
      music: "",
      rating: "",
      story: ""
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      addMovie(newMovie);
    },
  });

  const addMovie = (newMovie) => {
    console.log("onSubmit", newMovie);
    fetch(API, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/movieslist"));
  };
  return (
    <div className="box">
      <h1 className="title">Add The New Movie</h1>
      <form onSubmit={formik.handleSubmit} className="inputdata">
        <div className="inputs">
          <TextField
            className="outlined-basic"
            type="text"
            label="Image"
            id="image"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
            onBlur={formik.handleBlur}
            error={formik.touched.image && formik.errors.image}
            helperText={
              formik.touched.image && formik.errors.image
                ? formik.errors.image
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            helperText={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Summary"
            id="summary"
            name="summary"
            onChange={formik.handleChange}
            value={formik.values.summary}
            onBlur={formik.handleBlur}
            error={formik.touched.summary && formik.errors.summary}
            helperText={
              formik.touched.summary && formik.errors.summary
                ? formik.errors.summary
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Director"
            id="director"
            name="director"
            onChange={formik.handleChange}
            value={formik.values.director}
            onBlur={formik.handleBlur}
            error={formik.touched.director && formik.errors.director}
            helperText={
              formik.touched.director && formik.errors.director
                ? formik.errors.director
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Music"
            id="music"
            name="music"
            onChange={formik.handleChange}
            value={formik.values.music}
            onBlur={formik.handleBlur}
            error={formik.touched.music && formik.errors.music}
            helperText={
              formik.touched.music && formik.errors.music
                ? formik.errors.music
                : ""
            }
          />{" "}
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Rating"
            id="rating"
            name="rating"
            onChange={formik.handleChange}
            value={formik.values.rating}
            onBlur={formik.handleBlur}
            error={formik.touched.rating && formik.errors.rating}
            helperText={
              formik.touched.rating && formik.errors.rating
                ? formik.errors.rating
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Trailer"
            id="trailer"
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
            onBlur={formik.handleBlur}
            error={formik.touched.trailer && formik.errors.trailer}
            helperText={
              formik.touched.trailer && formik.errors.trailer
                ? formik.errors.trailer
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Id"
            id="id"
            name="id"
            onChange={formik.handleChange}
            value={formik.values.id}
            onBlur={formik.handleBlur}
            error={formik.touched.id && formik.errors.id}
            helperText={
              formik.touched.id && formik.errors.id
                ? formik.errors.id
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Film"
            id="film"
            name="film"
            onChange={formik.handleChange}
            value={formik.values.film}
            onBlur={formik.handleBlur}
            error={formik.touched.film && formik.errors.film}
            helperText={
              formik.touched.film && formik.errors.film
                ? formik.errors.film
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Year of movie released"
            id="year"
            name="year"
            onChange={formik.handleChange}
            value={formik.values.year}
            onBlur={formik.handleBlur}
            error={formik.touched.year && formik.errors.year}
            helperText={
              formik.touched.year && formik.errors.year
                ? formik.errors.year
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Stars"
            id="stars"
            name="stars"
            onChange={formik.handleChange}
            value={formik.values.stars}
            onBlur={formik.handleBlur}
            error={formik.touched.stars && formik.errors.stars}
            helperText={
              formik.touched.stars && formik.errors.stars
                ? formik.errors.stars
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="Actorscrew"
            id="actorscrew"
            name="actorscrew"
            onChange={formik.handleChange}
            value={formik.values.actorscrew}
            onBlur={formik.handleBlur}
            error={formik.touched.actorscrew && formik.errors.actorscrew}
            helperText={
              formik.touched.actorscrew && formik.errors.actorscrew
                ? formik.errors.actorscrew
                : ""
            }
          />
          <br />
          <TextField
            className="outlined-basic"
            type="text"
            label="story"
            id="Story"
            name="story"
            onChange={formik.handleChange}
            value={formik.values.story}
            onBlur={formik.handleBlur}
            error={formik.touched.story && formik.errors.story}
            helperText={
              formik.touched.story && formik.errors.story
                ? formik.errors.story
                : ""
            }
          />
          <br />
        </div>
        <div id="addbtn">
          <Button className="addbtn" type="submit" variant="contained">
            Add the Movie
          </Button>
        </div>
      </form>
      {/* <Movieslist list={list}/> */}
    </div>
  );
}
