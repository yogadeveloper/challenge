import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss';
import Home from './components/Pages/Home';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.createElement('div');
  appContainer.id = 'app';

  ReactDOM.render(
    <Home />,
    document.body.appendChild(appContainer)
  )
})
