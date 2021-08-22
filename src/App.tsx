import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import './App.css';

import ChatScreen from './components/ChatScreen';

const PostMessage = React.lazy(() => import("./components/PostMessage"));


function App() {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Router>
        <Switch>
          <Route path="/postMessage" component={PostMessage} />
          <Route path="/" component={ChatScreen} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;