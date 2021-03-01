import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Default from './layouts/Default'
import TaskWithApiCall from './pages/TaskWithApiCall'
import TaskStatic from './pages/TaskStatic'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Default>
        <Switch>
          <Route exact path="/" component={TaskWithApiCall} />
          <Route path="/task-static" component={TaskStatic} />
          <Route component={NotFound} />
        </Switch>
      </Default>
    </Router>
  )
}

export default App
