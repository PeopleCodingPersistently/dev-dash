import { Component } from 'react';
import Draggable from 'react-draggable';

export default class Test extends Component {
  
  render() {
    const styles = {
      width: '50px',
      height: '50px',
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
