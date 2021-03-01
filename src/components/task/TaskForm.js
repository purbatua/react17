import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      return alert('Field title is required')
    }

    onAdd({ title, date, reminder})

    setTitle('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="title">Title</label>
        <input className="form-control__input" type="text" name="title" placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input className="form-control__input" type="datetime-local" name="date" placeholder="Task title" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" name="reminder" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default TaskForm
