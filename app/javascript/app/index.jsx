import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div'))
  )
})
