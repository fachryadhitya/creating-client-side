import React from 'react'
import {Provider} from 'react-redux'
import './App.css'

import Store from './helpers/store'
import RouterApp from './RouterApp'

function App() {
  return (
    <Provider store = {Store}>
      <RouterApp></RouterApp>
    </Provider>
    
  )
}
export default App;