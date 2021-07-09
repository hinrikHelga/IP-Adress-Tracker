import React, { useState } from 'react';
import styles from './searchBar.module.css'
import { ReactComponent as SvgArrow } from '../../images/icon-arrow.svg';


export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState(() => initSearchTerm());

    function initSearchTerm() {
        return '';
    }

    function handleChange(event)  {
        setSearchTerm(event.target.value);
    }

    function handleClick() {
        console.log(searchTerm);
    }

    return (
        <>
            <input
                className={styles.searchBar}
                placeholder={'Search for any IP address or domain'}
                value={searchTerm}
                onChange={handleChange}
            /> 
            <button className={styles.btn} onClick={handleClick}>
                <SvgArrow></SvgArrow>
            </button>
        </>
    );
}