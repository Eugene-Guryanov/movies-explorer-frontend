import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <label className='filter-checkbox'>
            <input type='checkbox' className='filter-checkbox__hidden' />
            <div className='filter-checkbox__visible'></div>
            <span className='filter-checkbox__span'>Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox