import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// style
// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// pages
import Home from './pages/home/Home';
import BookDetail from './pages/books/BookDetail';
import Login from './components/login/LoginPopup';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/books/:id' component={BookDetail} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
