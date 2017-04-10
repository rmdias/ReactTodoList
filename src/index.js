import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import './style/base.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';

ReactDOM.render(
  <TodoList />,
  document.getElementById('app')
);

// $(document).foundation();
