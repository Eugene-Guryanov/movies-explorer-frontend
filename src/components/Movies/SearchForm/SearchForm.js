import "./SearchForm.css";
import FilterCheckbox from "../../common/FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="SearchForm" noValidate>
      <label className="SearchForm__form-field">
        <input className="SearchForm__input" placeholder="Поиск" />
        <button className="SearchForm__button button-active " >Поиск</button>
      </label>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
