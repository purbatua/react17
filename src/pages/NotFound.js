const NotFound = () => {
  return (
    <div className="container">
      <h1 style={style.title}>Page not found</h1>
    </div>
  )
}

const style = {
  title: {
    fontSize: '1.5 rem',
    color: 'red',
    textAlign: 'center',
    padding: '1rem'
  }
}

export default NotFound
