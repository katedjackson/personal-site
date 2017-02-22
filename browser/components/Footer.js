import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <hr/>
      <a href="https://twitter.com/msjacksonnyc"><img src={"/public/twitter.png"}/></a>
      <a href="https://www.linkedin.com/in/katelyn-jackson/"><img src={"/public/linkedin.png"}/></a>
      <a href="https://github.com/katedjackson"><img src={"/public/github.png"}/></a>
      <a href="http://stackoverflow.com/story/katedjackson"><img src={"/public/stackoverflow.png"}/></a>
    </div>
  );
}

export default Footer;
