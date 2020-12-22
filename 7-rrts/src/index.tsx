import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { create } from 'domain';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// interface AppProps {
//   color?: string;
// }

// const App = (props: AppProps): JSX.Element => {
//   const [counter, setCounter] = React.useState(1);

//   const onIncrement = (): void => {
//     setCounter(counter + 1);
//   };
//   const onDecrement = (): void => {
//     setCounter(counter - 1);
//   };

//   return (
//     <div>
//       <button onClick={onIncrement}>Increment</button>
//       <span>{counter}</span>
//       <button onClick={onDecrement}>Decrement</button>
//     </div>
//   );
// };

// class App extends React.Component<AppProps> {
//   state = { counter: 1 };

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <span>{this.state.counter}</span>
//         <button onClick={this.onDecrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.querySelector('#root'));
