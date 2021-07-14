import React, { useState } from 'react';
import styles from './searchBar.module.css'
import { ReactComponent as SvgArrow } from '../../images/icon-arrow.svg';

export const SearchBar = (props) => {
    const { setAddress } = props;
    const [searchTerm, setSearchTerm] = useState(() => '');

    function handleChange(event)  {
        setSearchTerm(event.target.value);
    }

    function handleClick() {
        console.log('in handleClick');
        setAddress(searchTerm);
    }

    return (
        <div>
            <input
                className={styles.searchBar}
                placeholder={'Search for any IP address or domain'}
                value={searchTerm}
                onChange={handleChange}
            /> 
            <button className={styles.btn} onClick={handleClick}>
                <SvgArrow></SvgArrow>
            </button>
        </div>
    );
}