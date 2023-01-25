import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllCountries from './components/AllCountries';
import Navbar from './components/Navbar';
import SearchContext from './components/SearchContext';
import ContinentContext from './components/ContinentContext';
import SingleCountry from './components/SingleCountry';

function App() {
  let searchState = useState("");
  let continentState = useState("");
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Navbar/>
        <ContinentContext.Provider value={continentState}>
          <SearchContext.Provider value={searchState}>
            
            <Routes>
                <Route path='/countries-api-react' element={<AllCountries/>}/>
                <Route path='/countries-api-react/:countryName' element={<SingleCountry/>}/>
            </Routes>

          </SearchContext.Provider>
        </ContinentContext.Provider>
    </div>
  );
}

export default App;
