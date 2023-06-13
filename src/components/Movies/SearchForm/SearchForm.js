import "./SearchForm.css";
import FilterCheckbox from "../../common/FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import { useState } from "react";

function SearchForm({ onChekBox, onSearchClick }) {
  const { handleSubmit } = useForm({ mode: "onChange" });
  const [isError, setError] = useState(false);
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('value')) || "");
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
    localStorage.setItem('value', JSON.stringify(e.target.value))
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
