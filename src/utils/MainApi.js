const {
    MAIN_API_BASE_URL,
} = require('./const');

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkPromise(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(res);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'GET',
            headers: { ...this._headers, authorization: `Bearer ${localStorage.getItem('token')}` },
        }).then(this._checkPromise);
    }

    register(data) {
        return fetch(`${this._baseUrl}signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._checkPromise);
    }

    authorize(data) {
        return fetch(`${this._baseUrl}signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
        }).then(this._checkPromise);
    }

    updateUserInfo(data) {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: { ...this._headers, authorization: `Bearer ${localStorage.getItem('token')}` },
            body: JSON.stringify(data),
        }).then(this._checkPromise);
    }

    getSavedMoviesList() {
        return fetch(`${this._baseUrl}movies`, {
            method: 'GET',
            headers: { ...this._headers, authorization: `Bearer ${localStorage.getItem('token')}` },
        }).then(this._checkPromise);
    }

    saveMovie(data) {
        return fetch(`${this._baseUrl}movies`, {
            method: 'POST',
            headers: { ...this._headers, authorization: `Bearer ${localStorage.getItem('token')}` },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co/${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,}),
        }).then(this._checkPromise);
    }

    removeSavedMovie(movie) {
        return fetch(`${this._baseUrl}movies/${movie._id}`, {
            method: 'DELETE',
            headers: { ...this._headers, authorization: `Bearer ${localStorage.getItem('token')}` },
        }).then(this._checkPromise);
    }

}

const mainApi = new MainApi({
    baseUrl: MAIN_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default mainApi;