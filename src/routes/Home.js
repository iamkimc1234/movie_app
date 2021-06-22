import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

const MOVIE_URL = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    // const movies = await axios.get(MOVIE_URL);
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(MOVIE_URL);
    this.setState( { movies, isLoading: false } );
  }

  componentDidMount() {
    // fetch() or axios
    this.getMovies();
  }

  render() {
    // const isLoading = this.state.isLoading;
    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        { isLoading 
          ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          : (
            <div className="movies">
              { movies.map( movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id} year={movie.year} title={movie.title} 
                  summary={movie.summary} poster={movie.medium_cover_image} 
                  genres={movie.genres}
                />
              ))}              
            </div>
          )}
      </section>
    )
  }
}

export default Home;