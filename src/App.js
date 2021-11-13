import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import Movies from "./components/movies/Movies";
import Show from "./components/show/Show";
import Shows from "./components/shows/Shows";
import NavBar from "./components/layout/NavBar";
import Actor from "./components/actors/Actor";
import SearchResults from "./components/searchResults/SearchResults";
import Footer from "./components/footer/Footer";
import Login from "./components/auth/Login";

import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/' exact component={Home} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/shows' exact component={Shows} />

          <Route path='/movie/:id' exact component={Movie} />
          <Route path='/show/:id' exact component={Show} />
          <Route path='/actor/:id' exact component={Actor} />
          <Route path='/search/:name' exact component={SearchResults} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
