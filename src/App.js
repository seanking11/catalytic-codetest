import React, { Component } from 'react';
import Steps from './Components/Steps';
import Process from './Components/Process';
import steps from '././Components/data/steps.json';
//import Collapsible from './Components/Collapsible.js';
import Editor from './Components/Editor';
import _ from 'lodash';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      steps: steps,
      activeStep: steps[0]
    }

  }



  componentDidMount() {
    console.log(this.state.steps);
  }


  changeActive(theStep) {
    this.setState({
      activeStep: theStep
    });
  }

  render() {
    
    var steps = _.map(this.state.steps, (step) => {
      return <Steps step={step} steps={this.state.steps} key={step.stepNumber} changeActive={this.changeActive} />
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


/*
    fetch("./steps.json")
      .then(d => {
        this.setState({
          stepsData: d
        })
      })
      console.log(this.state);
*/