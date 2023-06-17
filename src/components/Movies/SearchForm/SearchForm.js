import "./SearchForm.css";
import FilterCheckbox from "../../common/FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function SearchForm({ onChekBox, onSearchClick }) {
  const { handleSubmit } = useForm({ mode: "onChange" });
  const [isError, setError] = useState(false);
  const location = useLocation();
  const [value, setValue] = useState(location.pathname === '/saved-movies' ? '' : JSON.parse(localStorage.getItem('value')));


  useEffect(() => {
    if (location.pathname === '/movies' && JSON.parse(localStorage.getItem('value'))) {
      setValue(JSON.parse(localStorage.getItem('value')))
    } else {
      setValue('')
    }
  }, [location]);

  function onSearch() {
    if (value.length === 0) {
      setError(true);
    } else {
      setError(false);
      onSearchClick(value);
    }
  }
  function onChange(e) {
    setValue(e.target.value)
    if (location.pathname === '/movies') {
      localStorage.setItem('value', JSON.stringify(value))
    }
    else {
      return;
    }
  }


  return (
    <form className="search-form" onSubmit={handleSubmit(onSearch)}>
      <label className="search-form__form-field">
        <input
          className="search-form__input"
          placeholder="Поиск"
          onChange={onChange}
          value={value ? value : ''}
        />
        <button
          className="search-form__button button-active button-hover"
          type="submit"
        >
          Поиск
        </button>
      </label>
      <FilterCheckbox onChekBox={onChekBox} />
      {isError ? <span className="search__form-error">Нужно ввести ключевое слово</span> : ''}
    </form>
  );
}

export default SearchForm;
