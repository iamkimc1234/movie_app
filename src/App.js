import React, { Fragment } from "react";
import { HashRouter, Route }  from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

function App() {
  return (
    <>   {/* for jsx fragment */}    
    <HashRouter>      
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    </> // for jsx Fragment
  );
}

export default App;