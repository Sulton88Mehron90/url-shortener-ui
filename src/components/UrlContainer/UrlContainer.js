import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  console.log('UrlContainer:', props) // delete it
  const urlEls = props.urls.map((url) => {
    
    return (
      <div className="url" key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank" rel="noopener noreferrer">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });  

  console.log("urlEls",urlEls ) // delet it

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
