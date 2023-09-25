import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls().then(data => setUrls(data.urls));
  }, []);

  function handleFormSubmit(longUrl, title) {
    postUrl(longUrl, title)
      .then(data => {
        setUrls(prevUrls => [...prevUrls, data]);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm onSubmit={handleFormSubmit} />
      </header>
      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
