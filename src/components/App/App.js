import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../components/contexts/CurrentUserContext";

import "./App.css";
import Header from "../Header/Header";
// import ProtectedRoute from "../common/ProtectedRoute/ProtectedRoute";

import Techs from "../Main/Techs/Techs";
import AboutMe from "../Main/AboutMe/AboutMe";
import Porfolio from "../Main/Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import AboutProject from "../Main/AboutProject/AboutProject";
import Promo from "../Main/Promo/Promo";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Page404 from "../Page404/Page404";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Porfolio />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header LoggedIn={isLoggedIn} />
              <SearchForm />
              <MoviesCardList />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header LoggedIn={isLoggedIn} />
              <SearchForm />
              <savedMovies />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        <Route
          path="/profile"
          element={
            <>
              <Header LoggedIn={isLoggedIn} />
              <Profile />
            </>
          }
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
