import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrl, deleteUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getUrls()
      .then(data => setUrls(data.urls));
  }, []);

  function handleFormSubmit(longUrl, title) {
    postUrl(longUrl, title)
      .then(data => {
        setUrls(prevUrls => [...prevUrls, data]);
      })
      .catch(error => {
        console.error("Error:", error.message);
        setError(error.message);
      });
  }

  function handleDelete(id) {
    deleteUrl(id)
      .then(() => {
        setUrls(prevUrls => prevUrls.filter(url => url.id !== id));
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
      {error && <p className="error-message">{error}</p>}
      <UrlContainer urls={urls} deleteUrl={handleDelete} />
    </main>
  );
}

export default App;

