import React from 'react';
import ReactDOM from 'react-dom';
import DailyNeedsDrawer from './DailyNeedsDrawer.js';
import {List, ListItem, RadioButton,RadioButtonGroup,Stepper,Step,StepLabel,RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {ListGroup,ListGroupItem,Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import Progress from 'react-progressbar';
import classes from '../index.css';

class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
    prog: 33,
  };

  handleNext = () => {
    const {stepIndex,prog} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
      prog: prog + 33,
    });
  };

  handlePrev = () => {
    const {stepIndex,prog} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1, prog: prog - 33});
    }
  };

  getStepContent(stepIndex) {

    const styles = {
      block: {
        maxWidth: 250,
      },

      iconStyle : {
        'fill':'#4688C7'
      },
      
      radioButton: {
        marginTop: 20,
        'padding-bottom':'10',
        'border-bottom-color':'gray',
        'border-bottom-style':'solid',
        'border-bottom-width':'1px'
      },

      radioButtonLabelStyle: {
        'font-weight': 'normal',
      }

    };

  	let cont = (

      <div>
		<Progress completed={this.state.prog} color="#4688C7" />
   		<Grid bsClass="container-fluid">
  		<Row>
  		<Col xs={12} md={12}><br />
        <h3>Which class is the student in ?</h3>
        <br />
      </Col>
  		<Col xs={12} md={12}>
      <RadioButtonGroup defaultSelected="v">
        <RadioButton
          value="v"
          label="Class V"
          iconStyle={styles.iconStyle}
          labelStyle={styles.radioButtonLabelStyle}
          style={styles.radioButton}
        />
        <RadioButton
          value="vi"
          labelStyle={styles.radioButtonLabelStyle}
          label="Class VI"
          style={styles.radioButton}
        />
        <RadioButton
          value="vii"
          labelStyle={styles.radioButtonLabelStyle}
          label="Class VII"
          style={styles.radioButton}
        />
        <RadioButton
          value="viii"
          labelStyle={styles.radioButtonLabelStyle}
          label="Class VII"
          style={styles.radioButton}
        />
      </RadioButtonGroup>
      </Col>        
        </Row>
        </Grid>
        </div>);
    switch (stepIndex) {
      case 0:
        return cont;
      case 1:
        return cont;
      case 2:
        return cont;
      default:
        return cont;
    }
  }

  render() {
    const {prog, finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    return (
      <div>
      <Grid bsClass="container-fluid">
      <br /><br />
            <Row><center style={{'font-size':'2.5em'}}>Search Tutor</center></Row>
      </Grid>
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
		<Paper zDepth={2} style={{'padding-bottom': '2em','padding-top':'2em', 'margin-top':'2em'}}>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, prog:33, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="<- Back"
                  disabled={stepIndex === 0}
                  style={{'padding-left':'1em','padding-right':'1em'}}
                  labelStyle={{'text-transform':'capitalize'}}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  style={{'float':'right'}}
                  label={stepIndex === 2 ? 'Finish' : 'Next -> '}
                  buttonStyle={{'background-color':'#4688C7','padding-left':'1em','padding-right':'1em'}}
                  labelStyle={{'text-transform':'capitalize','font-size':'1em'}}
                  labelColor="white"
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
        </Paper>
      </div>
      </div>
    );
  }
}

var Content = React.createClass({

  render: function() {

    alert(this.props);

    const styles = {  

      row:
      {
        'margin-top':'0.2em',
        backgroundColor: '#f3f3f3'
      },

      howitworks1: 
      {
        backgroundColor:'white',
      },

      howitworks2: 
      {
        'margin-top':'1.5em',
        'margin-bottom':'2em'
      },      

      imgsearch: {
        width:'1.5em',
        'margin-top':'0.4em',
        'float':'right'
      },

      searchbut: {
        'font-size':'1.5em',
        'padding-bottom':'1em',
        'padding-bottom':'1em',
        'color':'white',
        'padding-left': '4em',
        'padding-right': '4em',
        backgroundColor:'#4688C7'
      },

      listi: {
        'font-size':'1.5em',
      }
    }

    return (
        <Grid bsClass="container-fluid">
        <Row style={styles.howitworks1}>
        <Col md="12" style={{'font-size':'1.8em'}}>
        <Row style={styles.row}><center>Find the right tutor near you</center></Row>
        <br />
        <br />
        <Row>
        <ul>
        <Row>
        <Col md="2" />
        <Col md="4" class="dailyneedsli">
        <li><span style={{'margin-top':'1em','position':'absolute'}}>All Subjects</span></li>
        </Col>
        <Col md="4">
        <li><span style={{'margin-top':'1em','position':'absolute'}}>Preferred Location</span></li>
        </Col>
        <Col md="2" />
        </Row>
        </ul>
        <br />
        <br />
        <ul>
        <Row>
        <Col md="2" />
        <Col md="4">
        <li><span style={{'margin-top':'1em','position':'absolute'}}>Professional Courses</span></li>
        </Col>
        <Col md="4">      
        <li><span style={{'margin-top':'1em','position':'absolute'}}>Experienced Tutors</span></li>
        </Col>
        <Col md="2" />
        </Row>
        </ul>
        </Row>
        </Col>
        </Row><br /><br />
        </Grid>
      );
  }
});

var Leadgen = React.createClass({

	render: function() {
		return (
			<div>
      <div id="leadgenimage">
				<DailyNeedsDrawer />
				<HorizontalLinearStepper />
        <br /><br />
      </div>
      <Content />
			</div>
		);
	}

});

module.exports = Leadgen;