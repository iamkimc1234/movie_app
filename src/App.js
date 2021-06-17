import React from "react";
import axios from "axios";
import Movie from "./Movie";

const MOVIE_URL = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    // const movies = await axios.get(MOVIE_URL);
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(MOVIE_URL);
    // console.log(movies);
    this.setState( { movies, isLoading: false } );
  }

  componentDidMount() {
    // fetch() or axios
    this.getMovies();
  }

  render() {
    // const isLoading = this.state.isLoading;
    const { isLoading, movies } = this.state;

    return <div>      
      { isLoading ? "Loading..." : movies.map( movie => {
        
        return <Movie 
                key={movie.id}
                id={movie.id} year={movie.year} title={movie.title} 
                summary={movie.summary} poster={movie.medium_cover_image} />
      }) }
    </div>
  }
}

export default App;