import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate} from "react-router-dom";
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

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [apiMovie, setApiMovie] = useState([]);
  const [serverMessage, setServerMessage] = useState({
    text: "",
    isError: null,
  });
  const [savedMovies, setSavedMovies] = useState(
    JSON.parse(localStorage.getItem("savedMovies")) || []
  );
  const [Search, setSearch] = useState("");
  const [isShort, setShort] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const path = location.pathname;

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
        });
    }
  }, []);
  useEffect(() => {
    async function fetchData() {
      await Promise.all([moviesApi.getMoviesList()])
        .then((items) => {
          setApiMovie(items[0]);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        });
    }
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  function handleLogin(data) {
    mainApi
      .authorize(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        mainApi.getUserInfo().then((userData) => {
          setCurrentUser(userData);
          console.log(userData.currentUser)
          setLoggedIn(true);
         navigate('/movies')
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
    setLoggedIn(false);
    setCurrentUser({});
  }
  const filteredMovies = (
    location.pathname === "/saved-movies" ? savedMovies : apiMovie
  ).filter((movie) => {
    return movie.nameRU
      .toLocaleLowerCase()
      .includes(Search.toLocaleLowerCase());
  });
  const shortMovie = (
    location.pathname === "/saved-movies" ? savedMovies : apiMovie
  ).filter((movie) => {
    if (movie.duration < 40) {
      return movie.nameRU
        .toLocaleLowerCase()
        .includes(Search.toLocaleLowerCase());
    }
  });

  const handleCardLike = async (data) => {
    mainApi
      .saveMovie(data)
      .then((res) => {
        const newSavedMovies = [...savedMovies, res];

        setSavedMovies(newSavedMovies);
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
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Header LoggedIn={isLoggedIn} />
              <SearchForm onChekBox={setShort} onSearchClick={setSearch} pageName={'movies'}/>
              <MoviesCardList
                filteredMovies={isShort ? shortMovie : filteredMovies}
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
              <Header LoggedIn={isLoggedIn} />
              <SearchForm onChekBox={setShort} onSearchClick={setSearch} />
              <MoviesCardList
                filteredMovies={isShort ? shortMovie : filteredMovies}
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
            <Register
              onRegister={handleRegister}
              serverMessage={serverMessage}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login onLogin={handleLogin} serverMessage={serverMessage} />
          }
        />
        <Route path="*" element={<Page404 />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Header LoggedIn={isLoggedIn} />
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
