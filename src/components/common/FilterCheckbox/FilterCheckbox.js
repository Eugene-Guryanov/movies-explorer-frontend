import { useEffect, useState } from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';

function FilterCheckbox({ onChekBox }) {
    const location = useLocation();
    const [check, setCheck] = useState(JSON.parse(localStorage.getItem('check')) === true ? JSON.parse(localStorage.getItem('check')) : false)
    function handleCheckBox(e) {
        setCheck(e.target.checked)
        if (location.pathname === '/movies') { localStorage.setItem('check', JSON.stringify(e.target.checked)) }
        else {
            return;
        }
    }
    useEffect(() => {
        onChekBox(check)
    }, [check])
    useEffect(() => {
        if (location.pathname === '/saved-movies' && JSON.parse(localStorage.getItem('check'))) {
            setCheck(false)
        } else {
            setCheck(JSON.parse(localStorage.getItem('check')))
        }
    }, [location])
    return (
        <label className='filter-checkbox'>
            <input type='checkbox' className='filter-checkbox__hidden' checked={check} onChange={handleCheckBox} />
            <div className='filter-checkbox__visible'></div>
            <span className='filter-checkbox__span'>Короткометражки</span>
        </label>
    )
}

export default FilterCheckbox