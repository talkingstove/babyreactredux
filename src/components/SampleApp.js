import React from 'react';
import {connect} from 'react-redux';

class SampleApp extends React.Component {

  render() {

    return (
   
      <div className="sample-app-view">
        {this.props.exampleStateVar}
        <br />
        <button onClick={() => this.props.updateExampleStateVar('My new value') }>
          Change value
        </button>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exampleStateVar: state.exampleStateVar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateExampleStateVar: (newVal) => dispatch({
      type : 'updateExampleStateVar',
      payload: {
        newVal: newVal
      }
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleApp)