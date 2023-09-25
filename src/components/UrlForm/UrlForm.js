import React, { useState } from 'react';

function UrlForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("In UrlForm before submit:", title, urlToShorten);
  //   onSubmit(urlToShorten, title);
  //   clearInputs();
  // }  

  const handleSubmit = e => {
    e.preventDefault();
    
    // Check if either field is empty
    if (!title.trim() || !urlToShorten.trim()) {
        alert('Both fields are required!');
        return;  // Exit the function early if fields are empty
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
      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
