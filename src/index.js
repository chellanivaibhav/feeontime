import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logoimage from './images/logoimage.png';
import carouselimage from './images/carousel.png';
import educationloan from './images/educationloan.png';
import studentinsurance from './images/studentinsurance.png';
import healthcard from './images/healthcard.png';
import elearning from './images/elearning.png';
import admissionhotline from './images/admissionhotline.png';
import informative from './images/informative.png';
import onlinetests from './images/onlinetests.png';
import aptitutetest from './images/aptitutetest.png';
import searchtutor from './images/searchtutor.png';
import bag from './images/bag.png';
import books from './images/books.png';
import bottles from './images/bottles.png';
import sports from './images/sports.png';
import toys from './images/toys.png';
import stationary from './images/stationary.png';
import uniform from './images/uniforms.png';
import shoes from './images/shoes.png';
import off from './images/off.png';
import physicsbook from './images/physicsbook.png';
import school_uniform from './images/school_uniform.png';
import logo from './images/logo.png';
import admissions from './images/admissions.png';
import playschool from './images/playschool.png';
import school from './images/school.png';
import coaching from './images/coaching.png';
import college from './images/college.png';
import skills from './images/skills.png';
import tutor from './images/tutor.png';
import workshops from './images/workshops.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var MyDrawer = React.createClass({

	getInitialState: function()
	{
		 return {open: false, showModal: false};
	},

	close() {
		this.setState({ showModal: false });
	},

	open() {
		this.setState({ showModal: true });
	},

 	handleToggle :function() { this.setState({open: !this.state.open}) },

 	handleClose : function() { this.setState({open: false}) },

	render: function() {

		  const styles = {	  	

			modalstyle: {
				padding:'0px',
				'margin-top':'100px'
			},

			logoimagestyle: {
				'padding-top': '30%'
			},

			h3: {
				color: 'white'
			},

			bottompad: {
				'padding-bottom':'10%'
			},

			modalfirstpart: {
				'background-color':'#4688c7'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			h6: {
				float:'right'
			},

			loginbutton: {
				background: '#4688C7',
				width:"70%",
				color:'white',
				'font-size':'1em'
			},

		  	appbarstyleactive:
		  	{
		  		'border-bottom-width':'2px',
		  		'border-bottom-style':'solid',
		    	backgroundColor: '#4688C7',
		    	color: 'white',
		    	'font-size': '110%'
		  	},
		  	appbarstyle:
		  	{
		    	backgroundColor: '#4688C7',
		    	color: 'white',
		    	'font-size': '110%'
		    },
		    logostyle:
		    {
		    	width:'50%'
		    },
		    button:
		    {
		    	color:'white',
		    	'background-color':'#4688C7',
		    	'border-color':'white'
		    }
		  };

		return (
			<div>
				<Modal show={this.state.showModal} style={styles.modalstyle} onHide={this.close} >
					<Modal.Header closeButton>Login / Signup
					</Modal.Header>
					<Modal.Body>
						<Grid bsClass="container-fluid">
							<Row>
								<Col xs="12" md="6" style={styles.modalfirstpart}>
								<center>
								<Image src={logoimage} style={styles.logoimagestyle} />
								<h3 style={styles.h3}><br />Pay Fees Online</h3><br />
								<h3 style={Object.assign({},styles.h3,styles.bottompad)}>#gocashless</h3>
								<br />
								</center>
								</Col>
								<Col xs="12" md="6">
								<Tabs defaultActiveKey={1}>
									<Tab eventKey={1} title="Login">
										<Grid bsClass="container-fluid">
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Password" />
											</Row>
											<Row>
												<a href="#"><h6 style={styles.h6}>Trouble Logging in ?</h6></a>
											</Row>
											<Row>
												<center><Button style={styles.loginbutton}>Login</Button></center>
											</Row>
										</Grid>
									</Tab>
									<Tab eventKey={2} title="Sign Up">
										<Grid bsClass="container-fluid">
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Name" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Email Id" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Mobile Number" />
											</Row>
											<Row>
												<TextField underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} floatingLabelText="Password" />
											</Row>
											<Row>
												<center><Button style={styles.loginbutton}>Sign Up</Button></center>
											</Row>
										</Grid>
									</Tab>
								</Tabs>
								</Col>
							</Row>
						</Grid>
					</Modal.Body>
				</Modal>
			  <AppBar title={<img src={logo} style={styles.logostyle} />} onLeftIconButtonTouchTap={this.handleToggle} style={styles.appbarstyle}>
			   <Toolbar style={styles.appbarstyle}>
			   <ToolbarGroup>
			   <FlatButton style={styles.appbarstyleactive}>Pay Fees Here</FlatButton>
			   <FlatButton style={styles.appbarstyle}>Daily Needs</FlatButton>
			   <FlatButton style={styles.appbarstyle}>Shop Online</FlatButton>
			   <FlatButton style={styles.appbarstyle}>Offers</FlatButton>
			   <FlatButton style={styles.appbarstyle}>Updates</FlatButton>
			   <ButtonToolbar><Button onClick={this.open} bsStyle="" style={styles.button}>Login | Signup</Button></ButtonToolbar>
			   </ToolbarGroup>
			   </Toolbar>
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

var Book = React.createClass({

	render: function() {

			const styles = {

				row:  {
					backgroundColor: '#ECF3F9',
				},
				bookp:{
					'padding-left':'2em',
					'width':'60%'
				},
				book: {
					'padding-top':'2em',
					'padding-bottom':'2em',
				},
				h4: {
					'text-align':'center',
					'color':'#518FCA'
				},
				h2: {
					'text-align':'right'
				},
				h3: {
					'text-align':'left',
					'color':'#9B9C9F'
				},
				bookhead: {
					'background-color':'#E0E7EC',
					'text-align':'center',
					'font-size':'2em'
				}
			}

		return (

			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="12" style={styles.bookhead}>BOOKS</Col>
					</Row>
					<Row style={styles.row}>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Discount = React.createClass({

	render: function() {

			const styles = {

				row:  {
					backgroundColor: '#ECF3F9',
				},
				discount: {
					'padding-top':'2em',
					'padding-bottom':'2em',
					'padding-left':'5em',
					'padding-right':'5em'
				},
				line: {
					'background-color':'#D4DAE0'
				}
			}

		return (

			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="12" style={styles.line}/>
					</Row>
					<Row style={styles.row}>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Uniform = React.createClass({

	render: function() {

			const styles = {

				row:  {
					backgroundColor: '#ECF3F9',
				},
				uniform: {
					'padding-top':'2em',
					'padding-right':'2em',
					'padding-bottom':'2em',
					'padding-left':'2em'
				},
				h4: {
					'text-align':'center',
					'color':'#518FCA'
				},
				h2: {
					'text-align':'right'
				},
				h3: {
					'text-align':'left',
					'color':'#9B9C9F'
				},
				uniformhead: {
					'background-color':'#E0E7EC',
					'text-align':'center',
					'font-size':'2em'
				}
			}

		return (

			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="12" style={styles.uniformhead}>UNIFORMS</Col>
					</Row>
					<Row style={styles.row}>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Shop = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				backgroundColor: '#ECF3F9',
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'2em'
			},
			leftpad: {
				'padding-left':'15%'
			}
		}
		return (
			<div>
			 <Grid bsClass="container-fluid">
				<Row style={styles.row}>
					<Col xs="12" md="12" style={styles.line}/>
				</Row>
				<Row style={styles.row}>
					<Col xs="12" md="12" style={styles.shophead}>SHOP ONLINE</Col>
				</Row>
			    <Row style={styles.row}>
			      <Col xs={12} md={1} style={styles.leftpad}>
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={books} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={stationary} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={uniform} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={shoes} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={bag} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={bottles} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={sports} width="150%" />
			      </Col>  
			      <Col xs={12} md={1}>
			      <Image src={toys} width="150%" />
			      </Col>
			    </Row>
			 </Grid>
			</div>
		);
	}

});

var DailyNeeds = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				'padding-top': '1em',
				'padding-bottom':'1em',
				backgroundColor: '#ECF3F9'
			},
			row1:
			{
				backgroundColor:'#ECF3F9'
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'2em'
			},
			leftpad: {
				'padding-left':'10%'
			}
		}
		return (
			<div>
			 <Grid bsClass="container-fluid">
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.line}/>
				</Row>
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.shophead}>DAILY NEEDS</Col>
				</Row>
			    <Row style={styles.row}>
			      <Col xs={12} md={1} style={styles.leftpad}>
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={searchtutor} width="130%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={aptitutetest} width="130%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={onlinetests} width="130%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={informative} width="130%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={admissionhotline} width="130%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={elearning} width="130%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={healthcard} width="130%" />
			      </Col>  
			      <Col xs={12} md={1}>
			      <Image src={studentinsurance} width="130%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={educationloan} width="130%" />
			      </Col>
			    </Row>
			 </Grid>
			</div>
		);
	}

});

var Content = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				backgroundColor: '#ECF3F9',
			},
			leftpad: {
				'padding-left':'15%'
			}
		}
		return (
			<div>
			 <Grid bsClass="container-fluid">
			    <Row style={styles.row}>
			      <Col xs={12} md={1} style={styles.leftpad}>
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={playschool} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={school} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={college} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={coaching} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={tutor} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={admissions} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={workshops} width="150%" />
			      </Col>  
			      <Col xs={12} md={1}>
			      <Image src={skills} width="150%" />
			      </Col>
			    </Row>
			 </Grid>
			</div>
		);
	}

});

var Playschool = React.createClass({

	getInitialState : function() {
		return { dataSource: [] };
	},

	handleUpdateInput : function(value) {
		this.setState({
			dataSource : [
				value
			],
		});
	},

	render: function() {

		const styles = {

			row : {

				backgroundColor: '#ECF3F9'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'margin-bottom':'3%',
				border:'5px solid #aecbe6',
				'background-color': '#dbe8f4',
				width:'90%'
			},

			proceed: {
				
				background: '#4688C7',
				width:"100%",
				'font-size':'1.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8" style={styles.content}>
						<Grid bsClass="container-fluid" style={styles.formstyle}>
						<Row style={styles.row}  style={styles.textfieldstyle}>
							<Col xs="12" md="6">
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Location" width="90%" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Play School" width="90%" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" width="90%" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" width="90%" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" width="90%" />
								</Row>
							</Col>
							<Col xs="12" md="6"  style={styles.textfieldstyle}>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" width="90%" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" width="90%" />
								</Row>
								 <AutoComplete
								  style={styles.textfieldstyle}
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.dataSource}
						          onUpdateInput={this.handleUpdateInput}
						          floatingLabelText="Search Location"
						          fullWidth={true}
						        />
							</Col>
						</Row>
						<Row>
							<Button bsStyle="primary" style={styles.proceed} >Proceed</Button>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel style={styles.carousel}>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

const MyAwesomeReactComponent = () => (
  <div>
  <MyDrawer />
  <Content />
  <Playschool />
  <DailyNeeds />
  <Shop />
  <Discount />
  <Book />
  <Uniform />
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
