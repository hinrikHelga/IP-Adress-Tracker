import React, { useState, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { Title } from './components/Title/title';
import { SearchBar } from './components/SearchBar/searchBar';
import { getIPAddress } from './api/GeoAPI';
import { InformationBlock } from './components/InformationBlock/informationBlock';
import { DisplayMap } from './components/Map/map';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [ address, setAddress ] = useState(() => '');
  const [ locationData, setLocationData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isInitializedWithData, setIsInitializedWithData ] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        const result = await getIPAddress(address);
        setLocationData(result.data);
        setIsLoading(false);
        if (!isInitializedWithData) { setIsInitializedWithData(true) }
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
            {
              isInitializedWithData
              ? <DisplayMap addressData={ locationData }/>
              : <></>
            }
        </div>
        <InformationBlock isLoading={ isLoading } locationInfo={ locationData }/>
      </div>
    </div>
  );
}

export default App;
