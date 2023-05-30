import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
    return (
        <h2 className={`${props.className} section-title`}>{props.title}</h2>)

}

export default SectionTitle