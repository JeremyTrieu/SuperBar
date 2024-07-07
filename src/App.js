import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchList } from './components/SearchList';
import { useState } from 'react';

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1 className = 'super-bar-logo'>Super Bar</h1>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchList results={results} />
      </div>
    </div>
  );
}

export default App;
