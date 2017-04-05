import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './index.css';

ReactDOM.render(
  <TodoList />,
  document.getElementById('app')
);

// $(document).foundation();
