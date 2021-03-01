import PropTypes from 'prop-types'

const Button = ({ children, color, onClick }) => {
  color = color || 'green'

  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>{ children }</button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}



export default Button