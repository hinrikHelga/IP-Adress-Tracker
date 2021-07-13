import React from 'react';
import styles from './informationBlock.module.css'

export const InformationBlock = (props) => {
    const { locationInfo, isLoading } = props;
    console.log(isLoading);
    return (
        <>
             <div className={styles.block}>
                <div className={ styles.details }>
                    <h4>IP ADDRESS</h4> 
                    { isLoading ? '-' : locationInfo.ip }
                </div>
                <div className={ styles.details }>
                    <h4>LOCATION</h4> 
                    { isLoading ? '-' : `${locationInfo.location.city}, ${locationInfo.location.country} ${locationInfo.location.postalCode}` }
                </div>
                <div className={ styles.details }>
                    <h4>TIME ZONE</h4>
                    { isLoading ? '-' : `UTC ${locationInfo.location.timezone}` }
                </div>
                <div className={ `${styles.details} ${styles.lastElem}` }>
                    <h4>ISP</h4> 
                    { isLoading ? '-' : locationInfo.isp }
                </div>
            </div>
        </>
    );
}