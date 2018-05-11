import React from 'react'
import { Switch, Route } from 'react-router-dom'
import News from '../news/news-list'
import Calendar from '../calendar/calendar-container'
import HomeLinks from '../home-links/home-links-container'
import Messages from '../messages/messages-container'
import Settings from '../settings/settings-container'
import {authUser} from '../../store/actions/auth'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/news' component={News}/>
        <Route exact path='/' component={News}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/homelinks' component={HomeLinks}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/settings' component={Settings}/>  
      </Switch>
    </main>
  )
  
  export default Main