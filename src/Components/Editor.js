import React, { Component } from 'react';

class Editor extends Component {

	constructor(props){
    super(props)
    this.state = {
      stepName: props.step.stepName,
      stepDescription: props.step.Description
    }
  }

	componentWillMount(){
    console.log(this.props);
	}
/*
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
*/
	save() {
		console.log("Process Title: ");
		console.log("Process Description: ");
	}

  render() {

    return (
      <div>
      <h1>{this.state.stepName}</h1>
      <h2>{this.state.stepDescription}</h2>
      </div>
    );
  }
}

export default Editor;