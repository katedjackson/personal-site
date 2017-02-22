import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Homepage from './Homepage';

const App = (props) => {
  return (
    <div className="container">
      <NavBar />
      {
        props.children && React.cloneElement(props.children, props)
      }
      <Footer />
    </div>
  );
}

export default App;
