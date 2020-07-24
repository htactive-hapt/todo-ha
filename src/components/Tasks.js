import React, { useState } from 'react'
import { connect } from 'react-redux'
import { EditOutlined, CloseOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Input, Button, Col, Row } from 'antd'
import { deleteTask, checkTask, editTask } from '../actions';
import Task from './Task';

const Tasks = ({ tasks, dispatch }) => {
	const [isEditting, setIsEditting] = useState(false)
	const [taskTitle, setTaskTitle] = useState('')
	const [idTaskEdit, setIdTaskEdit] = useState(0)

	const handleDelete = (id) => {
		if (window.confirm('Are you sure to delete this task?')) {
			dispatch(deleteTask(id))
		}
	}

	const handleChange = (event) => {
		setTaskTitle(event.target.value)
	}

	const handleEditTask = (id, value) => {
		setIsEditting(!isEditting)
		setIdTaskEdit(id)
		setTaskTitle(value)
	}

	const handleSaveEditTask = (id) => {
		if (taskTitle === '' || taskTitle.trim === '') {
			setIsEditting(!isEditting)
			alert('Enter enter')
			return false;
		} else {
			dispatch(editTask(id, taskTitle))
			setIsEditting(!isEditting)
		}
	}

	const handleCheckTask = (id) => {
		dispatch(checkTask(id))
	}

	if (isEditting) {
		return (
			tasks.map((task, id) => (
				idTaskEdit === task.id ?
					<Row className='task' style={{ borderLeft: `4px solid ${task.color}` }} key={id}>
						<Col span={1}> <Input type='checkbox' defaultChecked={task.isCompleted} onClick={() => handleCheckTask(task.id)} /></Col>
						<Col span={19}>
							<Col>
								{task.createdAt}
							</Col>
							<Col>
								<Input
									className='textarea-input'
									onChange={handleChange}
									value={taskTitle}
									autoFocus
								/>
							</Col>
						</Col>
						<Col span={4} className='button'>
							<Button onClick={() => handleSaveEditTask(task.id)}><CheckCircleOutlined /></Button>
							<Button onClick={() => handleDelete(task.id)}><CloseOutlined /></Button>
						</Col>
					</Row>
					: (
						<Row className='task' style={{ borderLeft: `4px solid ${task.color}` }} key={id}>
							<Col span={1}> <Input type='checkbox' defaultChecked={task.isCompleted} onClick={() => handleCheckTask(task.id)} /></Col>
							<Col span={19}>
								<Col>
									{task.createdAt}
								</Col>
								<Col>
									<Input
										className='textarea-input'
										value={task.title}
									/>
								</Col>
							</Col>
						</Row>
					)
			)))
	} else {
		return (
			tasks && tasks.map((task, id) => (
				<Row className='task' style={{ borderLeft: `4px solid ${task.color}` }} key={id}>
					<Col span={1}> <Input type='checkbox' defaultChecked={task.isCompleted} onClick={() => handleCheckTask(task.id)} /></Col>
					<Col span={19}>
						<Col>
							{task.createdAt}
						</Col>
						<Col>
							<Input
								className='textarea-input'
								value={task.title}
								onClick={() => handleEditTask(task.id, task.title)}
							/>
						</Col>
					</Col>
					<Col span={4} className='button'>
						<Button onClick={() => handleEditTask(task.id, task.title)}><EditOutlined /></Button>
						<Button onClick={() => handleDelete(task.id)}><CloseOutlined /></Button>
					</Col>
				</Row>
			))
		)
	}
}

export default connect()(Tasks)