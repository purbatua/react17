import { useState, useEffect } from 'react'
import TaskHeader from '../components/task/TaskHeader'
import Tasks from '../components/task/Tasks'
import TaskForm from '../components/task/TaskForm'
import TaskService from '../services/task'


function TaskWithApiCall() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await TaskService.list()
        setTasks(tasks)
      } catch (e) {
        console.error('[TASK_SERVICE.LIST]', e)
      }
    }

    // Fetch Tasks
    getTasks()
  }, [])


  // Add Task
  const addTask = async (task) => {
    try {
      const _task = await TaskService.create(task)
      const _tasks = [...tasks, { ..._task }]
      setTasks(_tasks)
      setShowAddTask(false)
    } catch(e) {
      console.error('[TASK_SERVICE.CREATE]', e)
    }
  }

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await TaskService.remove(id)
      const _tasks = tasks.filter((t) => t.id !== id)
      setTasks(_tasks)
    } catch(e) {
      console.error('[TASK_SERVICE.REMOVE]', e)
    }
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    try {
      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]
      if (!task) {
        throw new Error('Task not found')
      }

      const _task = await TaskService.update(id, { ...task, reminder: !task.reminder })
      const _tasks = [...tasks]
      _tasks[idx] = _task
      setTasks(_tasks)
      setShowAddTask(false)
    } catch(e) {
      console.error('[TASK_SERVICE.UPDATE]', e)
    }
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

export default TaskWithApiCall