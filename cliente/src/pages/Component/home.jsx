import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-600">
      <header className="bg-red-600 py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-white text-center text-3xl font-bold">Quillen Berries</h1>

        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://www.dictionary.com/e/wp-content/uploads/2018/09/berries_1000x700-790x310.jpg)' }}>

          <div className="bg-black bg-opacity-50 h-full flex items-center">
            <div className="container mx-auto text-center text-white">
              <h2 className="text-4xl sm:text-6xl font-bold mb-4">Bienvenidos a Quillen Berries</h2>
              <p className="text-lg sm:text-2xl mb-8">Productos frescos y de alta calidad</p>
              <p className="text-lg sm:text-1xl mb-6">Buscamos fomentar una agricultura sostenible
                y eficiente a través del uso de tecnologías
                avanzadas y prácticas respetuosas con el medio
                ambiente.</p>
              <a href="#productos" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Descubre más</a>
            </div>
          </div>
        </section>
        <section id="productos" className="py-16 bg-red-600" style={{
          backgroundImage: 'url(https://s1.1zoom.me/b5050/839/425759-svetik_3840x2400.jpg)', backgroundRepeat:'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-grey-300 text-center mb-12 bg-gray-100 rounded-lg shadow-lg p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>Una mirada a Quillen</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Calidad y Performance</h3>
                <p className="text-gray-600">Nos comprometemos a proporcionar
                  productos de alta calidad a precios justos logrando los mejores resultados.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestro Mundo</h3>
                <p className="text-gray-600">promovemos la conservación
                  de los recursos naturales y la preservación de las
                  comunidades locales, buscando un impacto positivo tanto en industria como la región.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra visión</h3>
                <p className="text-gray-600">La visión de Quillen es ser reconocidos como
                  líderes en la industria agrícola, ofreciendo productos
                  sostenibles y responsables, y siendo un modelo
                  para otras empresas que buscan hacer una
                  diferencia positiva en el mundo.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Conocenos</h3>
                <p className="text-gray-600">Somos una empresa comprometida con nuestra
                  misión, visión y trabajamos día a día para hacer
                  una diferencia positiva en el mundo y en las vidas
                  de las personas.</p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <footer className="bg-red-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>Derechos de autor © 2024 Quillen. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

