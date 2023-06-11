import "./SearchForm.css";
import FilterCheckbox from "../../common/FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import { useState } from "react";

function SearchForm({ onChekBox, onSearchClick }) {
  const { handleSubmit, reset } = useForm({ mode: "onChange" });
  const [value, setValue] = useState("");
  function onSearch() {
    onSearchClick(value);
    reset()
  }
  return (
    <form className="search-form" onSubmit={handleSubmit(onSearch)}>
      <label className="search-form__form-field">
        <input
          className="search-form__input"
          placeholder="Поиск"
          required
          onChange={(e) => setValue(e.target.value)}
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
