import React, { useState } from 'react';

function UrlForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim() || !urlToShorten.trim()) {
      setErrorMessage('Both fields are required!'); 
      return;
  } else {
      setErrorMessage('');
  }
    console.log("In UrlForm before submit:", title, urlToShorten);
    onSubmit(urlToShorten, title);
    clearInputs();
  }  

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='URL to Shorten...'
        name='urlToShorten'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value)}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 
      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
