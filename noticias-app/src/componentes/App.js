import React, { Component } from 'react';
import Header from './Header';
import Imagen from './Imagen';
import './../css/App.css';

class App extends Component {

  state = {
    noticias: [],
  }

  componentDidMount() {
    console.log('Estoy listo');
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    const pais = 'mx';
    const categoria = 'general';
    let url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=36ab97c3f38b4a879b7259e94b29843e`;

    console.log(url);

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        // console.log(noticias.articles);
        this.setState({
          noticias: noticias.articles
        })
      })
  
  }

  render() {
    return(
      <div className="App">
        { /* ***** Componente: Header ***** */}
        <Header
                titulo="Noticias"
        ></Header>
        {/* ***** Componente: Imagen ***** */}
        <div className="row centro">
              <div className="col-md-4 centro">
                <Imagen></Imagen>
              </div>
              <div className="col-md-4 centro">
                <h1 className='tamaño'>ReactJS</h1>
              </div>
          </div>
      </div>
    )
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
