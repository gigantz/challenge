import React from 'react'
import App from './App'
import { render } from 'react-dom'

render(
  <App dataUrl='/data.json' />,
  document.getElementById('root')
)
