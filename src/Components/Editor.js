import React, { Component } from 'react';

class Editor extends Component {

	constructor(props){
    super(props)
    this.state = {
      stepName: props.step.stepName,
      stepDescription: props.step.description
    }
  }

	componentWillReceiveProps(){
    	this.setState({
    		stepName: this.props.step.stepName,
    		stepDescription: this.props.step.stepDescription
    	});
    	console.log(this.props.step);
	}

	updateTitle(event) {
		this.setState({
			processTitle: event.target.value
		});
	}

	updateDescription(event) {
		this.setState({
			processDescription: event.target.value
		});
	}

  render() {

    return (
      <div>
      	<div className="row">
            <div className="input-field col s12">
              <input id="step-title" value={this.state.stepName} onChange={this.updateTitle.bind(this)} type="text" />
              <label htmlFor="step-title">Step Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="step-description" value={this.state.stepDescription} onChange={this.updateDescription.bind(this)} type="text" />
              <label htmlFor="step-description">Instructions</label>
            </div>
          </div>
      </div>
    );
  }
}

export default Editor;