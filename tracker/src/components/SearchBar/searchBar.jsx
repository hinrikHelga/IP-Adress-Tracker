import React, { useState, useEffect } from 'react';
import styles from './searchBar.module.css'
import { ReactComponent as SvgArrow } from '../../images/icon-arrow.svg';
import { getIPAddress } from '../../api/GeoAPI';

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState(() => initSearchTerm());
    const [address, setAddress] = useState(() => '');

    useEffect(() => {
        getIPAddress(address);
    }, [address])

    function initSearchTerm() {
        // Empty string will give the client request's public IP address.
        return '';
    }

    function handleChange(event)  {
        setSearchTerm(event.target.value);
    }

    function handleClick() {
        console.log('in handleClick');
        setAddress(searchTerm);
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