import React from 'react';
import { Router, Route } from 'react-router-dom';

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
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
        </div>
      </Router>
    </div>
  )
}

export default App