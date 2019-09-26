import React from 'react';
import Header from "./components/common/Header";
import List from "./components/list/List";
import Detail from "./components/detail/Detail"
import NotFound from "./components/notfound/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      
     <Header/>
     <Switch>
     <Route exact path="/" component={List}/>
     <Route path ="/currency/:id" component={Detail}/>
     <Route component={NotFound}/>
     </Switch>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
