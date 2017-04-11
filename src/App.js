import React, { Component } from 'react';
import Steps from './Components/Steps';
import Process from './Components/Process';
import steps from '././Components/data/steps.json';
import Editor from './Components/Editor';
import _ from 'lodash';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      steps: steps,
      activeStep: steps[0]
    }
    this.changeActive = this.changeActive.bind(this);
  }

  changeActive(theStep) {
    this.setState({
      activeStep: theStep
    });
    console.log(this.state.activeStep);
  }

  render() {
    
    var steps = _.map(this.state.steps, (step) => {
      return <Steps step={step} steps={this.state.steps} key={step.stepNumber} changeActive={this.changeActive.bind(this)} />
    });
    
    return (
      
    <div className="row">
        <div className="col s12 m4 l3 left-section">
          <div className="steps-header">Steps</div>
            <ul>
              {steps}
            </ul>
        </div>
      

      <div className="col s12 m8 l9 right-section">
        <Process />
        <Editor step={this.state.activeStep} />
      </div>
    </div>
      
    );
  }
}

export default App;
