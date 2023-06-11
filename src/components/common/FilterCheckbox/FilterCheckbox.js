import { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChekBox }) {
const [check, setCheck] = useState(true)
function handleCheckBox (e) {
    onChekBox(check)
    setCheck(e.target.checked)
}

    return (
        <label className='filter-checkbox'>
            <input type='checkbox' className='filter-checkbox__hidden'  checked={check} onChange={handleCheckBox} />
            <div className='filter-checkbox__visible'></div>
            <span className='filter-checkbox__span'>Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox