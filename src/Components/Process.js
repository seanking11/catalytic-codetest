import React, { Component } from 'react';
import theProcess from './data/process.json';


class Process extends Component {

	constructor(props){
    super(props)
    this.state = {
      process: theProcess,
      processTitle: theProcess.displayName,
  	  processDescription: theProcess.description
    }
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

	save() {
		console.log("Process Title: " + this.state.processTitle);
		console.log("Process Description: " + this.state.processDescription);
	}

  render() {

    return (
    	<div>
      <div>
          <div className="header">Process</div>
          <div className="row">
            <div className="input-field col s12">
              <input id="process-title" value={this.state.processTitle} onChange={this.updateTitle.bind(this)} type="text" />
              <label for="process-title">Process Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="process-description" value={this.state.processDescription} onChange={this.updateDescription.bind(this)} type="text" />
              <label for="process-description">Description</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="process-category" value={this.state.process.category} type="text" readonly/>
              <label for="process-category">Category (View Only)</label>
            </div>
          </div>
        </div>
        <div className="owner">
        	<img className="step-user tooltipped" src="img/avatars/pb_2.jpg" alt={this.state.process.owner} data-position="top" data-delay="25" data-tooltip={this.state.process.owner} />
        </div>
        <div className="action-btns">
          <div className="btn btn-flat delete-btn">Delete</div>
          <div className="btn btn-flat green white-text waves-effect save-btn" onClick={this.save.bind(this)}>Save</div>
        </div>
        <br />
        <br />
        <div className="divider"></div>

      </div>
    );
  }
}

export default Process;