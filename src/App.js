import React from 'react'
import './App.css'
import { Row } from 'antd'
import Menu from './components/Menu'
import AddButton from './components/AddButton'

const App = () => {

  return (
    <Row className='App'>
      <Row className='boards'>
        <AddButton />
        <Menu />
      </Row>
    </Row>
  )

}


export default App