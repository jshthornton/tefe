import React, { PropTypes, Component } from 'react';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

export default App;