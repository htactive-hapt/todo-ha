import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Input, Row } from 'antd'
import { addTask } from '../actions'

const AddButton = ({ dispatch }) => {
    const [text, setText] = useState('')

    const handleChange = event => {
        setText(event.target.value)
    }

    const randomColor = () => {
        let colorValues = ['red', 'blue', 'green', 'yellow', 'pink'];
        return colorValues[Math.floor(Math.random() * colorValues.length)];
    }

    const handleAddTask = (event) => {
        let timeNow = new Date().toLocaleString()
        let color = randomColor()

        if (event.key === 'Enter') {
            if (text === '' || text.trim() === '') {
                alert('Enter enter')
            } else {
                dispatch(addTask(text, timeNow, color))
                setText('')
            }
        }
    }

    return (
        <React.Fragment>
            <h2 className='title text-center'><strong>Todo List</strong></h2>
            <Row className='board'>
                <Input
                    className='input-task'
                    onChange={handleChange}
                    value={text}
                    onKeyDown={handleAddTask}
                    placeholder='Type here to add a new task'
                />
            </Row>
        </React.Fragment>
    )
}

export default connect()(AddButton)
