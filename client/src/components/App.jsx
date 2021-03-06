import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './stream/StreamCreate'
import StreamEdit from './stream/StreamEdit'
import StreamDelete from './stream/StreamDelete'
import StreamShow from './stream/StreamShow'
import StreamList from './stream/StreamList'
import Header from './Header'
import history from '../history'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/:id" exact component={StreamShow} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
            </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App