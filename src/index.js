import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Homepage from './Components/HomePage.js';
import DailyNeeds from './Components/DailyNeeds.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyDrawer from './Components/MyDrawer.js';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
    <MyDrawer />
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dailyneeds" component={DailyNeeds} />
      </div>
    </Router>
    </div>  
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);