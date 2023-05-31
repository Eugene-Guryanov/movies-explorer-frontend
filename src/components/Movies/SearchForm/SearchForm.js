import "./SearchForm.css";
import FilterCheckbox from "../../common/FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form" noValidate>
      <label className="search-form__form-field">
        <input className="search-form__input" placeholder="Поиск" />
        <button className="search-form__button button-active button-hover" >Поиск</button>
      </label>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
