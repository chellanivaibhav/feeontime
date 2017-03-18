import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar} from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var MyDrawer = React.createClass({

	getInitialState: function()
	{
		 return {open: false};
	},

 	handleToggle :function() { this.setState({open: !this.state.open}) },

 	handleClose : function() { this.setState({open: false}) },

	render: function() {

		  var buttonStyle = {
		    backgroundColor: 'transparent',
		    color: 'white'
		  };

		return (
			<div>
			  <AppBar title="fee on time"
			   onLeftIconButtonTouchTap={this.handleToggle}>
			  </AppBar>
			  <Drawer
	           docked={false}
	           open={this.state.open}
	           onRequestChange={(open) => this.setState({open})}
          	  >
			  <MenuItem onTouchTap={this.handleClose} >Menu Item</MenuItem>
			  <MenuItem onTouchTap={this.handleClose} >Menu Item 2</MenuItem>
			  </Drawer>
			</div>

		);
	}

});

const MyAwesomeReactComponent = () => (
  <div>
  <MyDrawer />
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
