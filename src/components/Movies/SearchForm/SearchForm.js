import "./SearchForm.css";
import FilterCheckbox from "../../common/FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";

function SearchForm({ onChekBox, onSearchClick }) {
  const { handleSubmit } = useForm({ mode: "onChange" });
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('value')) ||"");
  function onSearch() {
    onSearchClick(value);
  }
  function onChange (e){
    setValue(e.target.value)
    localStorage.setItem('value',  JSON.stringify(e.target.value))
  }
  useEffect(()=>{
    onSearch()
  }, [value])
  return (
    <form className="search-form" onSubmit={handleSubmit(onSearch)}>
      <label className="search-form__form-field">
        <input
          className="search-form__input"
          placeholder="Поиск"
          required
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
    </form>
  );
}

export default SearchForm;
