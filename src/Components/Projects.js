import React, { Component } from 'react';
import data from './steps.json';

class Projects extends Component {

	constructor(props){
    	super(props)
  	}

	componentWillMount(){
		console.log(data[0].stepNumber);
	}

	clicked() {
		console.log("clicked " + this.state.props.stepNumber)
	}

  render() {

    return (
      <div className="row step" onClick={this.clicked}>
                <div className="col s2 step-number">{this.props.stepNumber}</div>
                <div className="col s10 step-content">
                  <div className="step-title">{this.props.displayName}</div>
                  <div className="step-users">
                    <img className="step-user tooltipped" src="img/avatars/pb_2.jpg" alt="Sean" data-position="top" data-delay="25" data-tooltip="Sean" />
                  </div>
                  <div className="step-dependencies">Depends on: 1</div>
                </div>
              </div>
    );
  }
}

export default Projects;