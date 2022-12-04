import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/'
import NavBar from './components/NavBar/'
import Home from './components/Home/';
import Activities from './components/Activities/';
import Countries from './components/Countries/';
import Details from './components/Details/';
import ActivitiesCountry from './components/ActivitiesCountry/Index';
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001/"


function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={LandingPage}/>
      <Route path={"/home"} component={NavBar} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/home/countries"} component={Countries} />
      <Route exact path={"/home/countries/details/:countryName"} component={Details} />
      <Route exact path={"/home/activities"} component={Activities} />
      <Route exact path={"/home/countries/details/:countryName/activities"} component={ActivitiesCountry} />
    </div>
  );
}

export default App;
