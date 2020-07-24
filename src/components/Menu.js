import React from 'react'
import { Row, Tabs } from 'antd'
import Tasks from '../components/Tasks'
import { connect } from 'react-redux'

const { TabPane } = Tabs

const Menu = ({ tasks }) => {
    return (
        <Row className="view-options">
            <Tabs className='tasks'>
                <TabPane className='tab-list' tab="All" key="1" >
                    <Tasks tasks={tasks} />
                </TabPane>
                <TabPane className='tab-list' tab="Uncompleted" key="2">
                    <Tasks tasks={tasks.filter(task => !task.isCompleted)} />
                </TabPane>
                <TabPane className='tab-list' tab="Completed" key="3">
                    <Tasks tasks={tasks.filter(task => task.isCompleted)} />
                </TabPane>
                {/* {tasks && tasks.map((task) => (
                    <Tasks key={task.id} id={task.id} title={task.title} color={task.color} createdAt={task.createdAt} isCompleted={task.isCompleted} />
                ))} */}
            </Tabs>
        </Row>
    )
}
const mapStateProps = (state) => {
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateProps)(Menu)