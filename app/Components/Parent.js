var React = require("react");
var axios = require("axios");

var searcjPanel = require("./searchPanel.js");

var Parent = React.createClass({
	getInitialState: function(){
		return{
			topicInput: "",
			startYear: "",
			endYear: ""
		}
	},
	//function list

	//end function list
	render: function(){
		return(
			<div className='main-container'>
				<div className='container'>
					<div className='row'>
						<div className='column col-sm-12'>
							<div className='jumbotron'>
								<h1> New York Times Article Scrubber</h1>
							</div>
						</div>
					</div>
					<div className='row'>
						<searchPanel search={this.state.topicInput} startYear={this.state.startYear} endYear={this.state.endYear}/>
					</div>
			)
	}
});