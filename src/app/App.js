import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Article from '../components/Article';
import Articles from '../components/Articles';
import Author from '../components/Author';
import Categories from '../components/Categories';
import SignUp from '../components/SignUp';
import Profile from '../components/Profile';
import EditProfileForm from '../components/EditProfileForm';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/articles/:title' element={<Article />}></Route>
          <Route path='/authors/:name' element={<Author />}></Route>
         
          <Route path='/about' element={<About />}> </Route>         
          <Route path='/articles' element={<Articles />}></Route>
          <Route path='/categories/*' element={<Categories />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/profile/*' element={<Profile />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
