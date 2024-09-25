import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'themify-icons/css/themify-icons.css';
import 'animate.css/animate.min.css';
import './home1.css'; // Asegúrate de que la ruta sea correcta

const Home1 = () => {
  return (
    <header id="home" className="header">
      <div className="overlay text-white text-center">
        <h1 className="display-2 font-weight-bold my-3">Food Hut</h1>
        <h2 className="display-4 mb-5">Always fresh &amp; Delightful</h2>
        <a className="btn btn-lg btn-primary" href="#gallery">View Our Gallery</a>
      </div>
    </header>
  );
};

export default Home1;
