import React from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}
class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id}>
          {todo.title}
          <button>Delete</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = ({
  todos,
}: StoreState): { todos: Todo[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { fetchTodos })(_App);
