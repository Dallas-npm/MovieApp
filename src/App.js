import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovieRecommendations } from "./store/actions/movieActions";
import PopularMovies from "./components/movie/PopularMovies";
import Home from "./components/home/Home";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  return (
    <Router>
      <>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route
            path='/movies/popular-movies'
            exact
            component={PopularMovies}
          />
        </Switch>
      </>
    </Router>
  );
};

export default App;
