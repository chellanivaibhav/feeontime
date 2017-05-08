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
import SearchTutor from './Components/SearchTutor.js';
import AptitudeTest from './Components/AptitudeTest.js';
import OnlineTest from './Components/OnlineTest.js';
import Informative from './Components/Informative.js';
import AdmissionHotline from './Components/AdmissionHotline.js';
import ELearning from './Components/ELearning.js';
import HealthCard from './Components/HealthCard.js';
import StudentInsurance from './Components/StudentInsurance.js';
import EducationLoan from './Components/EducationLoan.js';
import Transaction from './Components/Transaction.js';
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
        <Route exact path="/searchtutor" component={SearchTutor} />
        <Route exact path="/aptitudetest" component={AptitudeTest} />
        <Route exact path="/onlinetest" component={OnlineTest} />
        <Route exact path="/informative" component={Informative} />
        <Route exact path="/admissionhotline" component={AdmissionHotline} />
        <Route exact path="/elearning" component={ELearning} />
        <Route exact path="/healthcard" component={HealthCard} />
        <Route exact path="/studentinsurance" component={StudentInsurance} />
        <Route exact path="/educationloan" component={EducationLoan} />
        <Route exact path="/transaction" component={Transaction} />
      </div>
    </Router>
    </div>  
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);