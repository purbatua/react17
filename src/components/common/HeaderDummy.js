import PropTypes from 'prop-types'

const HeaderDummy = ({ title }) => {
  return (
    <div>
      <h1 style={headingStyle}>{ title }</h1>
    </div>
  )
}

HeaderDummy.propTypes = {
  title: PropTypes.string.isRequired
}

HeaderDummy.defaultProps = {
  title: 'This is title'
}

// CSS in JS
const headingStyle = {
  color: 'blue',
  backgroundColor: 'black',
}

export default HeaderDummy
