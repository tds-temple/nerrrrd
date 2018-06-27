import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getDemo } from '../../store/actions/demo'

class Demo extends Component {

  static propTypes = {
    getDemo: PropTypes.func.isRequired,
    demo: PropTypes.object.isRequired
  }

  static defaultProps = {
    demo: {}
  }

  componentWillMount() {
    this.props.getDemo();
  }

  render() {

    return (
      <div style={{textAlign: 'center'}}>
        <h1>{this.props.demo.title}</h1>
        <p>{this.props.demo.body}</p>  
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  demo: state.demo
})

const dispatchToProps = (dispatch) => ({
   getDemo: () => dispatch(getDemo())
})

export default connect(mapStateToProps, dispatchToProps)(Demo);