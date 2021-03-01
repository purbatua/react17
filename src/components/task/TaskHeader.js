import PropTypes from 'prop-types'
import Button from '../basic/Button'

const TaskHeader = ({ title, onAdd, showAdd }) => {
  return (
    <header className="task-header">
      <h1>{ title }</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? 'red' : 'green'}
      >
        { showAdd ? 'Close' : 'Add' }
      </Button>
    </header>
  )
}

TaskHeader.defaultProps = {
  title: 'Task Tracker',
}

TaskHeader.propTypes = {
  title: PropTypes.string,
}

export default TaskHeader
