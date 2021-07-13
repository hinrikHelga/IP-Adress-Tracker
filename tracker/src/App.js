import React, { useState, useEffect } from 'react';
import './App.css';
import { Title } from './components/Title/title';
import { SearchBar } from './components/SearchBar/searchBar';
import { getIPAddress } from './api/GeoAPI';
import { InformationBlock } from './components/InformationBlock/informationBlock';

function App() {
  const [ address, setAddress ] = useState(() => '');
  const [ locationData, setLocationData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        const result = await getIPAddress(address);
        setLocationData(result.data);
        setIsLoading(false);
      }
      fetchData();
    }, [address])

    console.log(locationData);

  return (
    <div className="App">
      <div className="img">
        <div className="flexContainer">
          <Title />
          <SearchBar setAddress={ setAddress }/> 
            <InformationBlock isLoading={ isLoading } locationInfo={ locationData }/> 
          </div>
        </div>
    </div>
  );
}

export default App;
