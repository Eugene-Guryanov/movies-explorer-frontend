import './FilterCheckbox.css';

function FilterCheckbox() {
return(
    <label className='FilterCheckbox'>
<input type='checkbox' className='FilterCheckbox__hidden'/>
<div className='FilterCheckbox__visible'></div>
<span className='FilterCheckbox__span'>Короткометражки</span>
    </label>
)
}

export default FilterCheckbox