// Import dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage.component';
import SocialDistance from './components/social-distance.component';
import Navbar from './components/navbar.component';
import './App.css'
import Settings  from './components/settings.component';

class App extends React.Component {

  componentDidMount(){
    console.log("In component did mount");
    var settings;
    if(localStorage.getItem("settings")){
      console.log("Local Storage present already")
      settings = JSON.parse(localStorage.getItem("settings"));

    } else {
      console.log("Local Storage not present already")
      settings={
        message:"Social Distancing violation happened",
        subject:"ALERT! Email",
        location:"Ujire, Dakshina Kannada",
        toEmail:"nachiketkallapur@gmail.com",
        threshold:10,
        autoEmail:"false",
        lastAlertEmailSent:null
      }
    }

    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
      settings["latitude"]=latitude;
      settings["longitude"]=longitude;
      localStorage.removeItem("settings");
      localStorage.setItem('settings',JSON.stringify(settings));
      // console.log(latitude,longitude)
    })

  }

  componentWillUnmount(){
    localStorage.removeItem("settings");
  }

  render(){
    return (
      <div className='app-container'>
      <Navbar />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact path='/socialdistance' component={SocialDistance} /> 
        <Route exact path='/settings' component={Settings} /> 
      </Switch>
      </div>
    )
  }
}

export default App;