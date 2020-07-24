import React from 'react'
import { Row, Col, Button } from 'antd'
import { connect } from 'react-redux'

const Task = ({ task }) => {
    return (
        <div>abd</div>
        // <Row className='task' style={{ borderLeft: `4px solid ${task.color}` }} key={task.id}>
        //     <Col span={1}> <Input type='checkbox' defaultChecked={task.isCompleted} onClick={() => handleCheckTask(task.id)} /></Col>
        //     <Col span={19}>
        //         <Col>
        //             {task.createdAt}
        //         </Col>
        //         <Col>
        //             <Input
        //                 className='textarea-input'
        //                 onChange={handleChange}
        //                 value={taskTitle}
        //                 autoFocus
        //             />
        //         </Col>
        //     </Col>
        //     <Col span={4} className='button'>
        //         <Button onClick={() => handleEditTask(task.id, task.title)}><EditOutlined /></Button>
        //         <Button onClick={() => handleDelete(task.id)}><CloseOutlined /></Button>
        //     </Col>
        // </Row>
    )
}

export default connect()(Task)
