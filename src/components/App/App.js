import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../components/contexts/CurrentUserContext";

import "./App.css";
import Header from "../Header/Header";
import ProtectedRoute from "../common/ProtectedRoute/ProtectedRoute";

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
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { shortDuration } from "../../utils/const"

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')) || '');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [apiMovie, setApiMovie] = useState(localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : []);
  const [serverMessage, setServerMessage] = useState({
    text: "",
    isError: null,
  });
  const [savedMovies, setSavedMovies] = useState(localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')) : []);
  const [Search, setSearch] = useState("");
  const [isShort, setShort] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const path = location.pathname;
  localStorage.setItem('profile', JSON.stringify(currentUser))
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      mainApi
        .tokenCheck(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
          navigate('/');
        });
    }
  }, []);

  async function fetchData() {
    await Promise.all([moviesApi.getMoviesList()])
      .then((items) => {
        setApiMovie(items[0]);
        localStorage.setItem('movies', JSON.stringify(items[0]))
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }
  function handleLogin(data) {
    mainApi
      .authorize(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        mainApi.getUserInfo().then(async (userData) => {
          mainApi.getSavedMoviesList()
            .then((data) => {
              setSavedMovies(data)
              localStorage.setItem('savedMovies', JSON.stringify(data))
            })
          setLoggedIn(true);
          setCurrentUser(userData);
          await fetchData()
          navigate('/movies')
        });
        setServerMessage({
          text: '',
          isError: false,
        });
      })
      .catch(async (err) => {
        const res = await err.json();
        setServerMessage({
          text: res.message,
          isError: true,
        });
      })
      .catch((err) => console.log(err));
  }

  function handleRegister(data) {
    mainApi
      .register(data)
      .then(() => {
        handleLogin({
          email: data.email,
          password: data.password,
        });
        setServerMessage({
          text: '',
          isError: false,
        });
      })
      .catch(async (err) => {
        const res = await err.json();
        setServerMessage({
          text: res.message,
          isError: true,
        });
      })
      .catch((err) => console.log(err));
  }
  function handleUpdateUser(data) {
    mainApi
      .updateUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
        setMessage("данные обновлены успешно");
      })
      .catch((err) => {
        console.log(err);
        setMessage(`'ошибка'${err}`);
      });
  }
  function handleSignOut() {
    localStorage.clear();
    localStorage.removeItem('value');
    localStorage.removeItem('check');
    localStorage.removeItem('movies');
    localStorage.removeItem('profile');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('savedMovies');
    setServerMessage({
      text: '',
      isError: false,
    });
    setSearch('');
    setError(false);
    setApiMovie([])
    setLoggedIn(false);
    setCurrentUser({});
  }
  function findMovies(movie) {
    let movieRu = String(movie.nameRU).toLowerCase().trim();
    let movieEn = String(movie.movieEn).toLowerCase().trim();
    let Request = Search.toLowerCase().trim();
    return movieRu.indexOf(Request) !== -1 || movieEn.indexOf(Request) !== -1;
  }
  const savedMovieSerch = savedMovies.filter((movie) => {
    if (isShort) {
      if (movie.duration < shortDuration) {
        return findMovies(movie)
      }
    }
    else {
      return findMovies(movie)
    }
  })

  const filteredMovies = (
    apiMovie
  ).filter((movie) => {
    if (isShort) {
      if (movie.duration < shortDuration) {
        return findMovies(movie)
      }
    }
    else {
      return findMovies(movie)
    }
  });

  useEffect(() => {
    if (location.pathname === '/movies' && JSON.parse(localStorage.getItem('value'))) {
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies))
      setSearch(JSON.parse(localStorage.getItem('value')))
    } else {
      setSearch('')
    }
  }, [location])

  const handleCardLike = async (data) => {
    mainApi
      .saveMovie(data)
      .then((res) => {
        const newSavedMovies = [...savedMovies, res];
        setSavedMovies(newSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleCardDelete(movie) {
    mainApi
      .removeSavedMovie(movie)
      .then((res) => {
        const newSavedMovies = savedMovies.filter(
          (m) => m.movieId !== res.movieId
        );
        setSavedMovies(newSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies))
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={isLoggedIn} />
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
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Header loggedIn={isLoggedIn} />
              <SearchForm onChekBox={setShort} onSearchClick={setSearch} pageName={'movies'} />
              <MoviesCardList
                filteredMovies={filteredMovies}
                savedMovies={savedMovies}
                handleLikeClick={handleCardLike}
                handleCardDelete={handleCardDelete}
                error={error}
              />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Header loggedIn={isLoggedIn} />
              <SearchForm onChekBox={setShort} onSearchClick={setSearch} />
              <MoviesCardList
                filteredMovies={savedMovieSerch}
                handleCardDelete={handleCardDelete}
                savedMovies={savedMovies}
                error={error}
              />
              <Footer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute loggedIn={!isLoggedIn}>
              <Register
                onRegister={handleRegister}
                serverMessage={serverMessage}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute loggedIn={!isLoggedIn}>
              <Login onLogin={handleLogin} serverMessage={serverMessage} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Header loggedIn={isLoggedIn} />
              <Profile
                onUpdateUser={handleUpdateUser}
                onSignOut={handleSignOut}
                message={message}
                currentUser={currentUser}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
