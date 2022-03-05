import React from 'react';

function Header(props) {
  const { setPage } = props;

  const goTo = (page) => {
    console.log(page);
    setPage(page);
  }

  return (
    <div className="Header">
      <div id="title-box">
        <h1 id="title">Chrissie Sparling</h1>
      </div>
      <div className="link-buttons">
        <button className="link-button" onClick={()=>goTo('work')}><span>Work</span></button>
        <button className="link-button" onClick={()=>goTo('about')}><span>About Me</span></button>
        <button className="link-button"><span><a href='https://github.com/Chrissiesparling'>Github</a></span></button>
        <button className="link-button"><span><a href='https://www.linkedin.com/in/chrissiesparling/'>LinkedIn</a></span></button>
        <button className="link-button"><span><a href="mailto: gigglewrks@aol.com">gigglewrks@aol.com</a></span></button>
      </div>
    </div>
  );
}

export default Header;