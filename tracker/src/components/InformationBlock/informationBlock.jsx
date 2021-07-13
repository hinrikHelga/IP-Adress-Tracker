import React from 'react';
import styles from './informationBlock.module.css'

export const InformationBlock = (props) => {
    const { locationInfo, isLoading } = props;
    console.log(isLoading);
    return (
        <>
            {
                isLoading 
                ? ( <div className={ styles.loading }>Loading ...</div> )
                : ( <div className={styles.block}>
                        <div className={ styles.details }>
                            <h4>IP ADDRESS</h4> 
                            { locationInfo.ip }
                        </div>
                        <div className={ styles.details }>
                            <h4>LOCATION</h4> 
                            { `${locationInfo.location.city}, ${locationInfo.location.country} ${locationInfo.location.postalCode}` }
                        </div>
                        <div className={ styles.details }>
                            <h4>TIME ZONE</h4>
                            { `UTC ${locationInfo.location.timezone}` }
                        </div>
                        <div className={ `${styles.details} ${styles.lastElem}` }>
                            <h4>ISP</h4> 
                            { locationInfo.isp }
                        </div>
                    </div>
                )
            }
        </>
    );
}