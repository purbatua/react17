import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-list__item${task.reminder ? '--reminder' : '' }`} onDoubleClick={() => onToggle(task.id) }>
      <div className="task-list__item-header">
        <h3 className="task-list__item-title">{task.title}</h3>
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id) } />
      </div>
    </div>
  )
}

export default Task
