import { useState } from 'react'
import TaskHeader from '../components/task/TaskHeader'
import Tasks from '../components/task/Tasks'
import TaskForm from '../components/task/TaskForm'

function TaskStatic() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Lorem ipsum 1',
      date: '2021-02-18T08:59:04.049Z',
      reminder: true,
    },
    {
      id: 2,
      title: 'Lorem ipsum 2',
      date: '2021-02-18T08:59:04.049Z',
      reminder: false,
    },
    {
      id: 3,
      title: 'Lorem ipsum 3',
      date: '2021-02-18T08:59:04.049Z',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task)
    const id = tasks[tasks.length - 1].id + 1
    const _tasks = [...tasks, { ...task, id }]
    setTasks(_tasks)
    setShowAddTask(false)
  }

  // Delete Task
  const deleteTask = (id) => {
    const _tasks = tasks.filter((task) => task.id !== id)

    setTasks(_tasks)
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    const _tasks = tasks.map(task => {
      return task.id === id
        ? { ...task, reminder: !task.reminder }
        : task
    })

    setTasks(_tasks)
  }

  return (
    <div className="container">
      <TaskHeader onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <TaskForm onAdd={addTask} /> }
      { tasks.length > 0
          ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          : 'No Tasks To Show' }
    </div>
  )
}

export default TaskStatic
