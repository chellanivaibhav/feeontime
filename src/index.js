import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Homepage from './Components/HomePage.js';
import DailyNeeds from './Components/DailyNeeds.js';
import UserProfile from './Components/UserProfile.js';
import TransactionHistory from './Components/TransactionHistory.js';
import Leadgen from './Components/Leadgen.js';
import Transaction from './Components/Transaction.js';
import Coupon from './Components/Coupons.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dailyneeds" component={DailyNeeds} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/transactionhistory" component={TransactionHistory} />
        <Route exact path="/leadgen" component={Leadgen} />
        <Route exact path="/transaction" component={Transaction} />
        <Route exact path="/coupons" component={Coupon} />
      </div>
    </Router>
    </div>  
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);