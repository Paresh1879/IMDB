import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { Movieslist } from "./MoviesList";
import { NotFound } from "./NotFound.js";
import { AddMovie } from "./AddMovie";
import { MovieDetail } from "./MovieDetail";
import { EditMovie } from "./EditMovie";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "none", minHeight: "100vh" }} elevation={4} >
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
              <span className="logo">IMDb</span><span> Movies</span>
                </Typography>
              <Button color="inherit" onClick={() => history.push("/")}> Home </Button>
              <Button color="inherit" onClick={() => history.push("/movieslist")}>  Movies</Button>
              <Button color="inherit" onClick={() => history.push("/addmovie")}>AddMovie</Button>
              <Button color="inherit"
                startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                onClick={() => setMode(mode === "light" ? "dark" : "light")
                }>{mode === "light" ? "dark" : "light"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <hr />

          <Switch>
            {/* Each route is case, eg. - case '/about': */}
            {/* Match url display the below component */}

            <Route path="/movieslist"><Movieslist /></Route>
            <Route path="/movies/:id"><MovieDetail /></Route>
            <Route path="/addmovie"><AddMovie /></Route>
            <Route path="/movie/edit/:id"><EditMovie /></Route>
            <Route exact path="/"> <Home /> </Route>
            <Route path="**"><NotFound /> </Route>
          </Switch>

        </div>
      </Paper>
    </ThemeProvider>
  );
}
function Home() {
  return (
    <div className="box">
      <h1>Home, Welcome All to the IMDb Movie App</h1>
    </div>
  );
}

