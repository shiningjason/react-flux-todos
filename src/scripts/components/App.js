import React from 'react';
import Header from './Header';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header username="Jason" todoNumber={0} />
        <div>
          Here is todos block!
        </div>
      </div>
    );
  }
});

module.exports = App;
