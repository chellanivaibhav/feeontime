import React from 'react';
import ReactDOM from 'react-dom';
import DailyNeedsDrawer from './DailyNeedsDrawer.js';
import {Stepper,Step,StepLabel,RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {ListGroup,ListGroupItem,Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import physicsbook from '../images/physicsbook.png';
import Progress from 'react-progressbar';

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

  	let cont = (<div>
		<Progress completed={this.state.prog} color="#4688C7" />
   		<Grid bsClass="container-fluid">
  		<Row>
  		<Col xs={12} md={12}>
        <h3>Which Class the student in ?</h3>
        </Col>
  		<Col xs={12} md={12}>
  		<ListGroup>
	    <ListGroupItem>Class V</ListGroupItem>
	    <ListGroupItem>Class VI</ListGroupItem>
	    <ListGroupItem>Class VII</ListGroupItem>
	    <ListGroupItem>Class VIII</ListGroupItem>
		</ListGroup>
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
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 2 ? 'Finish' : 'Next'}
                  buttonStyle={{'background-color':'#4688C7'}}
                  labelColor="white"
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
        </Paper>
      </div>
    );
  }
}

var Leadgen = React.createClass({

	render: function() {
		return (
			<div>
				<DailyNeedsDrawer />
				<HorizontalLinearStepper />
			</div>
		);
	}

});

module.exports = Leadgen;