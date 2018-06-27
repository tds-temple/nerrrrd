import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getDemo } from '../../store/actions/demo'

class Demo extends Component {

  static propTypes = {
    getDemo: PropTypes.func.isRequired,
    demo: PropTypes.array.isRequired
  }

  static defaultProps = {
    demo: []
  }

  componentWillMount() {
    this.props.getDemo();
  }

  render() {

    return (
      <Fragment>
        {this.props.demo.map((item, index) => {
          return (
            <div key={index} style={{textAlign: 'center'}}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>  
            </div>
          )
        })}
      </Fragment>
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