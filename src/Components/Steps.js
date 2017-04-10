import React, { Component } from 'react';

class Steps extends Component {

	constructor(props){
		super(props);
	}

	makeActive() {
		console.log(this.props.step);
		this.props.changeActive(this.props.step);

	}


	findDependency(dependencies) {
		for(var i = 0; i < dependencies.length; i++) {
			for (var x = 0; x < this.props.steps.length; x++){
				if (dependencies[i] === this.props.steps[x].stepName) {
					return this.props.steps[x].stepNumber;
				}
			}
		}
	}

  render() {

    return (
      <div className="row step" onClick={this.makeActive.bind(this)}>
        <div className="col s2 step-number">{this.props.step.stepNumber}</div>
        <div className="col s10 step-content">
         <div className="step-title">{this.props.step.displayName}</div>
          <div className="step-users">
            <img className="step-user tooltipped" src="img/avatars/pb_2.jpg" alt="Sean" data-position="top" data-delay="25" data-tooltip="Sean" />
          </div>
          {this.props.step.requiredPreviousSteps.length == 0 ? "" : <div className="step-dependencies">Depends on: {this.findDependency(this.props.step.requiredPreviousSteps)}</div>}
        </div>
      </div>
    );
  }
}

export default Steps;