import React from "react";

/*
  function component sample
*/
// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "https://images.unsplash.com/photo-1621498341895-f04d7f4ac195?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "samgyeopsal",
//     image: "https://source.unsplash.com/random",
//     rating: 4.9
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image: "https://source.unsplash.com/random",
//     rating: 3
//   },
//   {
//     id: 4,
//     name: "Kimbap",
//     image: "https://source.unsplash.com/random",
//     rating: 3.5
//   },
//   {
//     id: 5,
//     name: "Doncasu",
//     image: "https://source.unsplash.com/random",
//     rating: 3
//   }       
// ]

// function Food({name, pic, rating}) {
//   return <div>
//     <h2>I like {name}!!!</h2>
//     <h4>{rating}/5</h4>
//     <img src={pic} alt={name} />
//   </div>  
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   pic: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// function App() {
//   return (    
//     <div>
//       {foodILike.map(dish => 
//         <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating}
//         />
//       )}
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState( now => ({ count: now.count + 1 }) );
  };
  minus = () => {
    this.setState( now => ({ count: now.count - 1 }) );
  }

  // https://ko.reactjs.org/docs/react-component.html
/*********************************************
  Mount
*********************************************/
  constructor(props) {
    super(props);
    console.log("constructor");
  }  
  // setState -> react is going to rerender
  componentDidMount() {
    console.log("componentDidMount");
  }
/*********************************************/

/*********************************************
  Update
*********************************************/
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
/*********************************************/
/*********************************************
  Unmount
*********************************************/
componentWillUnmount() {
  console.log("componentWillUnmount");
}
/*********************************************/

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
