import React from 'react'

import { WorkSpace } from './components/WorkSpace';

import './assets/css/App.css';

export const App = () => {
  return (
    <div className='main-container'>
      <h1>OPP Blockly</h1>
      <WorkSpace />
    </div>
  )
}
