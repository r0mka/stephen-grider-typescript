import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { App } from './components/App';
// import { reducers } from './reducers';

interface AppProps {
  color?: string;
}
class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <h1>React Typescript</h1>
        {this.props.color}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
