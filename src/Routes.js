import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Navbar from './components/Navbar'
// components
import {Home} from './pages/Home'
import {Products} from './pages/Products'
import {Reports} from './pages/Reports'
import {Team} from './pages/Team'
import {Messages} from './pages/Messages'
import {Support} from './pages/Support'

export function Routes() {
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/products' component={Products}/>
        <Route path='/team' component={Team}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/support' component={Support}/>
      </Switch>
    </Router>

  )
}

