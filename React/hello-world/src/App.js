
import React from 'react';
import './App.css';
import Greet from './components/Greet'
import DemoApplication from './components/demo/src/main/java/com/example/demo/DemoApplication.java'


class App extends React.Component {
    render() {
      return(
        <div className="App">
          <Greet />
          <DemoApplication />
        </div>
      );
    }
}

export default App;
