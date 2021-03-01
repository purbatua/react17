import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink exact to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink exact to='/task-static'>Task Static</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
