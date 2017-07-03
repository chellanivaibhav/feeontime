import React from 'react';
import ReactDOM from 'react-dom';
import MyDrawer from './Drawer.js';
import {FontIcon, Tabs, Tab, RaisedButton, PasswordField, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal} from 'react-bootstrap';
import Cookies from 'js-cookie';

import physicsbook from '../images/physicsbook.png';
import SwipeableViews from 'react-swipeable-views';
import visa from '../images/visa.gif';
import darshan from '../images/darshan.png';
import address from '../images/address.png';
var $ = require ('jquery');	
var PersonalDetails = React.createClass({
	

		getInitialState:function()
		{
			var p=this.getapidata();
			return {

					transac_id:p.transac_id,ref_id:p.ref_id,payment_status:p.payment_status,student_name:p.student_name,timestamp:p.timestamp,vendor_type:p.vendor_type,insti_name:p.insti_name,student_class:p.student_class,amount:p.amount
					};
			

		},

		getapidata: function()
		{
		var mydata={
			//tochange
			//'user_id':Cookies.get('userid')
			'user_id':82
		}
		var id=[];
		var data2=[];
		var transac_id=[];
		var ref_id=[];
		var payment_status=[];
		var student_name=[];
		var timestamp=[];
		var vendor_type=[];
		var insti_name=[];
		var student_class=[];
		var amount=[];
		var ret={

			transac_id:'',ref_id:'',payment_status:'',student_name:'',timestamp:'',vendor_type:'',insti_name:'',student_class:'',amount:'',id:''
		};

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{	
				var c = data[i].transaction_id;
				transac_id.push(c);

				var c=data[i].ref_id;
				ref_id.push(c);
				 
				var c=data[i].payment_status;
				payment_status.push(c);
				
				var c=data[i].name;
				student_name.push(c); 

				var c=data[i].Time;
				timestamp.push(c);

				var c=data[i].Vendor_type;
				vendor_type.push(c); 

				var c=data[i].institutename;
				insti_name.push(c); 


				var c=data[i].class;
				student_class.push(c); 

				var c=data[i].amount;
				amount.push(c);
				var c=data[i].id;
				id.push(c);

			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/all_transaction',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{	
				
				var data1 = data.message;
				do_the_stuff(data1);

			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});
		 
		//this.setState({id:data2});
		
		ret.transac_id=transac_id;
		ret.ref_id=ref_id;
		ret.payment_status=payment_status;
		ret.student_name=student_name;
		ret.timestamp=timestamp;
		ret.vendor_type=vendor_type;
		ret.insti_name=insti_name;
		ret.student_class=student_class;
		ret.amount=amount;
		ret.id=id;
		return ret;

	},





	render: function() {
		
		const styles = {

			line: {
				'border-top': '1px solid #e5e5e5',
				'border-bottom': '1px solid #e5e5e5',
				'font-size': '1.5em'
			},
			date: {
				'color': '#a2a2a2'
			},
			transaction: {
				'color': '#5b5b5b'
			},
			image: {
				'width': '100%'
			},
			ttext: {
				'padding-top':'0.8em'
			},
			institute: {
				'color': '#5a95cd'
			},
			classp: {
				'color': '#a2a2a2'
			},
			rupees: {
				'float':'right'
			},
			label: {
				'color':'#5a95cd'
			},
			repeatbut: {
				'border-radius': '20px',
				'border': '1px solid #5a95cd'
			},
			srow: {
				'padding-top': '0.2em',
				'padding-bottom': '1em'
			}
		}
		return (
			<div>
			<br /><br />

			<Grid bsClass="container-fluid" style={styles.line}><br />

						<Row>
							<Col md="2" xs="12" />
							<Col md="10" xs="12">
							<span style={styles.transaction}>Transaction id: {this.props.transac_id}</span>
							</Col>
						</Row>
						<Row>
							<Col md="2" xs="12" />
							<Col md="10" xs="12">
							<span style={styles.date}>this.props.timestamp</span>
							</Col>
						</Row>
						<Row>
							<Col md="2" xs="12" />
							<Col md="8" xs="12">
								<Row>
								<Col md="2">
									<Image src={darshan} style={styles.image} />
								</Col>
								<Col md="10" style={styles.ttext}>
									<Row>
											<span style={styles.institute}>Darshan Academy</span>
											<span style={styles.rupees}>&#8377; 12,000</span>
									</Row>
									<Row style={styles.srow}>
										<span style={styles.classp}>Class VI</span>
										<span style={styles.rupees}><FlatButton labelStyle={styles.label} style={styles.repeatbut} label="Repeat"/></span>
									</Row>
								</Col>
								</Row>
							</Col>
						<Col md="2" xs="12" />
						</Row>
			</Grid>

			<br /><br />
			</div>
		);
	}

});




var PersonalDetailsComponent=React.createClass({

			getInitialState:function()
		{
			var p=this.getapidata();
			return {

					transac_id:p.transac_id,ref_id:p.ref_id,payment_status:p.payment_status,student_name:p.student_name,timestamp:p.timestamp,vendor_type:p.vendor_type,insti_name:p.insti_name,student_class:p.student_class,amount:p.amount,data:p,id:p.id
					};
			

		},

		getapidata: function()
		{
		var mydata={
			//tochange
			//'user_id':Cookies.get('userid')
			'user_id':82
		}
		var id=[];
		var data2=[];
		var transac_id=[];
		var ref_id=[];
		var payment_status=[];
		var student_name=[];
		var timestamp=[];
		var vendor_type=[];
		var insti_name=[];
		var student_class=[];
		var amount=[];
		var ret={

			transac_id:'',ref_id:'',payment_status:'',student_name:'',timestamp:'',vendor_type:'',insti_name:'',student_class:'',amount:'',id:''
		};

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{	
				var c = data[i].transaction_id;
				transac_id.push(c);
				var c=data[i].ref_id;
				ref_id.push(c);
				 
				var c=data[i].payment_status;
				payment_status.push(c);
				
				var c=data[i].name;
				student_name.push(c); 

				var c=data[i].Time;
				timestamp.push(c);

				var c=data[i].Vendor_type;
				vendor_type.push(c); 

				var c=data[i].institutename;
				insti_name.push(c); 


				var c=data[i].class;
				student_class.push(c); 

				var c=data[i].amount;
				amount.push(c);
				var c=data[i].id;
				id.push(c);
				

			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/all_transaction',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{	
				
				var data1 = data.message;
				do_the_stuff(data1);

			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});
		 
		//this.setState({id:data2});
		
		ret.transac_id=transac_id;
		ret.ref_id=ref_id;
		ret.payment_status=payment_status;
		ret.student_name=student_name;
		ret.timestamp=timestamp;
		ret.vendor_type=vendor_type;
		ret.insti_name=insti_name;
		ret.student_class=student_class;
		ret.amount=amount;
		ret.id=id;
		return ret;

	},

	render:function()
	{


		/*const data=this.state.transac_id;
		const nameslist=data.map(name=>{


			return(

					<li>{name.transac_id}</li>
				)
		})*/


		

		const styles={

			line: {
				'border-top': '1px solid #e5e5e5',
				'border-bottom': '1px solid #e5e5e5',
				'font-size': '1.5em'
			},
			date: {
				'color': '#a2a2a2'
			},
			transaction: {
				'color': '#5b5b5b'
			},
			image: {
				'width': '100%',
				'padding-bottom':'0.5em'
			},
			ttext: {
				'padding-top':'0.8em'
			},
			institute: {
				'color': '#5a95cd'
			},
			classp: {
				'color': '#a2a2a2'
			},
			rupees: {
				'float':'right'
			},
			label: {
				'color':'#5a95cd'
			},
			repeatbut: {
				'border-radius': '20px',
				'border': '1px solid #5a95cd'
			},
			srow: {
				'padding-top': '0.2em',
				'padding-bottom': '1em'
			}
		}



		return(
				
			
				<div>
			<br /><br />

			
    		{this.state.id.map((id, index) => (
        




    			<Grid bsClass="container-fluid" style={styles.line}><br />

						<Row>
							<Col md="2" xs="12" />
							<Col md="10" xs="12">
							<span style={styles.transaction}>

							{
								this.state.transac_id[index]==''?
								(
									<div>
									Reference id: {this.state.ref_id[index]}
									</div>
									)

								:
								(
									<div>
									Transaction id: {this.state.transac_id[index]}
									</div>
									)


							}
							








							</span>
							</Col>
						</Row>
						<Row>
							<Col md="2" xs="12" />
							<Col md="10" xs="12">
							<span style={styles.date}>{this.state.timestamp[index]}</span>
							</Col>
						</Row>
						<Row>
							<Col md="2" xs="12" />
							<Col md="8" xs="12">
								<Row>
								<Col md="2">
									<Image src={darshan} style={styles.image} />
								</Col>
								<Col md="10" style={styles.ttext}>
									<Row>
											<span style={styles.institute}>{this.state.insti_name[index]}</span>
											<span style={styles.rupees}> {

												this.state.amount[index]==''?
												(<div></div>)
												:
												(
													<div>&#8377;{this.state.amount[index]}
													</div>
												)
											}




												</span>
									</Row>
									<Row style={styles.srow}>
										<span style={styles.classp}>
										{this.state.student_class[index]==''?
												(<div></div>)
												:
												(
													<div>Class{this.state.student_class[index]}
													</div>
												)
											}
										</span>
										<span style={styles.rupees}><FlatButton labelStyle={styles.label} style={styles.repeatbut} label="Repeat"/></span>
									</Row>
								</Col>
								</Row>
							</Col>
						<Col md="2" xs="12" />
						</Row>
			</Grid>







    		))}
   

			<br /><br />
			</div>


			);
		}





});
var Fees = React.createClass({

		getInitialState:function()
		{
			var p=this.getapidata();
			
			return {

					transac_id:p.transac_id,payment_status:p.payment_status,student_name:p.student_name,timestamp:p.timestamp,insti_name:p.insti_name,student_class:p.student_class,amount:p.amount,data:p,id:p.id
					};
			

		},

		getapidata: function()
		{
		var mydata={
			//tochange
			//'user_id':Cookies.get('userid')
			'user_id':82
		}
		var id=[];
		var data2=[];
		var transac_id=[];
		var ref_id=[];
		var payment_status=[];
		var student_name=[];
		var timestamp=[];
		var vendor_type=[];
		var insti_name=[];
		var student_class=[];
		var amount=[];
		var ret={

			transac_id:'',ref_id:'',payment_status:'',student_name:'',timestamp:'',vendor_type:'',insti_name:'',student_class:'',amount:'',id:''
		};

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{	
				var c = data[i].transaction_id;
				transac_id.push(c);
				
				 
				var c=data[i].payment_status;
				payment_status.push(c);
				
				var c=data[i].name;
				student_name.push(c); 

				var c=data[i].Time;
				timestamp.push(c);

				

				var c=data[i].institutename;
				insti_name.push(c); 


				var c=data[i].class;
				student_class.push(c); 

				var c=data[i].amount;
				amount.push(c);
				var c=data[i].id;
				id.push(c);
				

			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/all_transaction',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{	
				
				var data1 = data.message;
				do_the_stuff(data1);

			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});
		 
		//this.setState({id:data2});
		
		ret.transac_id=transac_id;
		ret.ref_id=ref_id;
		ret.payment_status=payment_status;
		ret.student_name=student_name;
		ret.timestamp=timestamp;
		ret.vendor_type=vendor_type;
		ret.insti_name=insti_name;
		ret.student_class=student_class;
		ret.amount=amount;
		ret.id=id;
		return ret;

	},





	

	render: function() {
		const styles = {

			line: {
				'border-top': '1px solid #e5e5e5',
				'border-bottom': '1px solid #e5e5e5',
				'font-size': '1.5em'
			},
			date: {

				'color': '#a2a2a2'
			},
			transaction: {
				'font-size':'0.7em',
				'color': '#5b5b5b'
			},
			image: {
				'width': '100%',
				'padding-bottom':'0.5em'
			},
			ttext: {
				'padding-top':'0.8em'
			},
			institute: {
				'color': '#5a95cd'
			},
			classp: {
				'color': '#a2a2a2'
			},
			rupees: {
				'float':'right'
			},
			label: {
				'color':'#5a95cd'
			},
			repeatbut: {
				'border-radius': '20px',
				'border': '1px solid #5a95cd'
			},
			srow: {
				'padding-top': '0.2em',
				'padding-bottom': '1em'
			}

		}
		return (
				<div>
			<br /><br />

			
    		{this.state.id.map((id, index) => (
        
    			

    					<Grid bsClass="container-fluid" style={styles.line}><br />

						<Row>
							<Col md="2" xs="12" />
							<Col md="10" xs="12">
							<span style={styles.transaction}>

									<div>
									Transaction id: {this.state.transac_id[index]}
									</div>
								</span>
							</Col>
						</Row>
						<Row>
							<Col md="2" xs="12" />
							<Col md="10" xs="12">
							<span style={styles.date}>{this.state.timestamp[index]}</span>
							</Col>
						</Row>
						<Row>
							<Col md="2" xs="12" />
							<Col md="8" xs="12">
								<Row>
								<Col md="2">
									<Image src={darshan} style={styles.image} />
								</Col>
								<Col md="10" style={styles.ttext}>
									<Row>
											<span style={styles.institute}>{this.state.insti_name[index]}</span>
											<span style={styles.rupees}> 

												
													<div>&#8377;{this.state.amount[index]}
													</div>
												
											}




												</span>
									</Row>
									<Row style={styles.srow}>
										<span style={styles.classp}>
										
												
													<div>Class{this.state.student_class[index]}
													</div>
												
										</span>
										<span style={styles.rupees}><FlatButton labelStyle={styles.label} style={styles.repeatbut} label="Repeat"/></span>
									</Row>
								</Col>
								</Row>
							</Col>
						<Col md="2" xs="12" />
						</Row>
			</Grid>

))}
			<br /><br />
			</div>


			);
		}


});
   






var DailyNeeds = React.createClass({

	getInitialState:function()
		{
			var p=this.getapidata();
			return {

					ref_id:p.ref_id,student_name:p.student_name,timestamp:p.timestamp,vendor_type:p.vendor_type
					};
			

		},
	getapidata: function()
		{
		var mydata={
			//tochange
			//'user_id':Cookies.get('userid')
			'user_id':82
		}
		var id=[];
		var data2=[];
		var transac_id=[];
		var ref_id=[];
		var payment_status=[];
		var student_name=[];
		var timestamp=[];
		var vendor_type=[];
		var insti_name=[];
		var student_class=[];
		var amount=[];
		var ret={

			ref_id:'',student_name:'',timestamp:'',vendor_type:'',id:''
		};

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{	
				
				var c=data[i].ref_id;
				ref_id.push(c);
				
				var c=data[i].name;
				student_name.push(c); 

				var c=data[i].Time;
				timestamp.push(c);

				var c=data[i].Vendor_type;
				vendor_type.push(c); 
				
				var c=data[i].id;
				id.push(c);

			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/show_dailyneed_transaction',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{	
				var data1 = data.message;
				do_the_stuff(data1);

			},
			error: function (error) 
			{
				alert(JSON.stringify(error));
			}			
		});
		 
		//this.setState({id:data2});
		
		ret.ref_id=ref_id;
		ret.student_name=student_name;
		ret.timestamp=timestamp;
		ret.vendor_type=vendor_type;
		ret.id=id;
		return ret;

	},


	

	render: function() {
		const styles = {

			

		}
		return (
			<div>
				
			</div>
		);
	}

});


var Container = React.createClass({

	getInitialState: function() {
		return { slideIndex:0 };
	},

	handleChange: function(value) {

		this.setState({
			slideIndex: value
		});
	},

	render: function() {
		const styles = {

			gridstyle:
			{
				'margin-right':'2em',
				'margin-left':'9em',
				'width':"85%",
				
				'margin-top':'6.7em'
			},
			tabs: {
				'background': '#4688c7'
			},

			tabitemcontainer: {
				'background': 'white'
			},

			tab: {
				'color' : '#4688c7'
			},
			paper:{

				'padding-left': '2em',
				'padding-right': '2em'
			}

		}
		return (
			<div>
				<br />
				<Grid bsClass="container" style={styles.gridstyle}>
					<Paper zDepth={5} style={styles.paper}>
					<Row>
						<Col xs="12" md="12">
							<Tabs onChange={this.handleChange} tabItemContainerStyle={styles.tabitemcontainer} value={this.state.slideIndex} inkBarStyle={styles.tabs}>
								<Tab label="All" buttonStyle={styles.tab} value={0} />
								<Tab label="Fees" style={styles.tab} value={1} />
								<Tab label="Daily Needs" style={styles.tab} value={2} />
								<Tab label="Shop" style={styles.tab} value={3} />
							</Tabs>
							<SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
								<div><PersonalDetailsComponent /></div>
								<div><h1><Fees/></h1></div>
								<div><h1><DailyNeeds /></h1></div>
								<div><h1>Shop</h1></div>
							</SwipeableViews>
						</Col>
					</Row>
					</Paper>
				</Grid>
			</div>
		);
	}

});

var TransactionHistory = React.createClass({

	render: function() {
		return (
			<div>
				<MyDrawer />
				<Container />
			</div>
		);
	}

});

module.exports = TransactionHistory;