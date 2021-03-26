import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/About'
import AddReview from './components/AddReview/AddReview'
import AllReviews from './components/AllReviews/AllReviews';





function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <HomePage/ >
          </Route>
          <Route path='/about'> 
            <AboutPage />
          </Route>
          <Route path='/all-reviews'>
            <AllReviews/>
          </Route>
          {/* <Route path='/add-review'>
            <AddReview />
          </Route> */}
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
