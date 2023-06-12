import { useEffect, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChekBox }) {
    const [check, setCheck] = useState(JSON.parse(localStorage.getItem('check')) === true ? JSON.parse(localStorage.getItem('check')) : false)
    console.log(localStorage.getItem('check'))
    function handleCheckBox(e) {
        setCheck(e.target.checked)
        localStorage.setItem('check', JSON.stringify(e.target.checked))
    }
    useEffect(() => {
        onChekBox(check)
    }, [check])
    return (
        <label className='filter-checkbox'>
            <input type='checkbox' className='filter-checkbox__hidden' checked={check} onChange={handleCheckBox} />
            <div className='filter-checkbox__visible'></div>
            <span className='filter-checkbox__span'>Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox