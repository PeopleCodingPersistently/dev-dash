import { Component } from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

class Test extends Component {
  
  render() {
    const styles = {
      width: '100px',
      height: '100px',
      border: '1px solid black'
    };

    return (
      <Draggable>
        <div style={styles}>
          <div>you can drag me</div>
        </div>
      </Draggable>
    );
  }
}

Test.propTypes = {
  /**
   * specify x and y coordinates for component to snap to
   */
  grid: PropTypes.arrayOf(PropTypes.number)
};

export default Test;
