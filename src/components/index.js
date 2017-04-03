import $ from 'jquery';

import '../node_modules/foundation-sites/js/foundation.core';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './index.css';


ReactDOM.render(
  <TodoList />,
  document.getElementById('app')
);

// $(document).foundation();
