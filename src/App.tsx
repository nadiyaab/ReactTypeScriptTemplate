import React from 'react';
import logo from 'logo.svg';
import library from 'library-react.jpeg';
import './App.scss';
import './header.scss';
import { Header } from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { AllBooks } from './allBooks';
import { HandleBooks } from  './HandleBooks';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/books">
          <AllBooks />
        </Route>
        <Route path="/members">
          <AllMembers />
        </Route>
        <Route path="/books/:id">
          <HandleBooks />
        </Route>
        <Route path="/members/:id">
          <ManageMembers />
        </Route>
      </Switch>
    </Router>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

function HomePage() {
  return <h2>Home</h2>;
};

function Books() {
  return <h2>All Books</h2>
};


function AllMembers() {
  return <h2>All Members</h2>
};

function ManageMembers() {
  let { id } = useParams();
  return <h2>Manage Members</h2>
};

export default App;

