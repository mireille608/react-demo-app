import './App.css';
//import React,{Component} from "react";
import Clock from './Component/Clock/Clock';
import Welcome from './Component/Welcome/Welcome';
import Contact from './Component/Contact/Contact'; 
import {Route,Switch} from "react-router-dom"; 
import React from "react";
import Navigation from "./Component/navigation/Navigation";
import Jeopardy from "./Component/Jeopardy/Jeopardy";


function App(){
  
    return(
      <div className ="App">
        <Navigation/>
        <Switch>

        <Route exact path="/"
        render={(props)=> <Welcome {...props} name="Mireille"/>} />
       <Route path="/contact" component={Contact}/>
       <Route path="/clock" component={Clock}/>
       <Route path="/Welcome/:name" component={Welcome}/>
       <Route path="/jeopardy" component={Jeopardy}/>
       <Route path="/navigation" component={Navigation}/>
       <Route><div>404</div></Route>
       </Switch>

      </div>
    )
  }

    

export default App;
