import React, { Component } from 'react';
import './App.css';
import Header from "./componentes/Headers";
import Formulario from "./componentes/Formulario";
import Error from "./componentes/Error";
import Clima from "./componentes/Clima";


class App extends Component {

  state = {
    error: false,
    consulta: {},
    resultado: {},
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.consulta != this.state.consulta) {
      this.consultarApi(); // hace una comparacion si el estado anterior es diferente an nuevo
      // si si son diferentes entonces que si consulte la api
    }
  }
  // creamos el componente para consultar la api
  consultarApi = () => {
    // destruimos el objeto respuesta para separarlo en variables
    const { ciudad, pais } = this.state.consulta;
    //ahora vamos a consultar la api con fetch 
    const appId = "2c03828e8ace87419589b2ed0a17aa51";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    fetch(url)
      .then(respuesta => {
        //console.log(respuesta);  // nos muestra la respuesta  de la api
        return respuesta.json();  // hay que retornarla json
      })
      .then(datos => {
        // ya teniendo todos los datos los pasamos a nuestro state
        this.setState({
          resultado: datos,
        })
      })
  }
  // creamos el metodo que recibe el objeto del hijo
  datosConsulta = (respuesta) => {
    // validar formulario
    if (respuesta.ciudad === "" || respuesta.pais === "") {
      // los datos del formulario estan vacios
      this.setState({
        error: true,
      })
    }
    else {
      // si no pasa significa que el usuario si ingreso los datos correctamente
      // entonces se debe consultar la api
      // y ya cambiamos el estado a los datos ingresados por el usuario
      // tambien cambiamos el estado del error por ahora si esta funcionando
      this.setState({
        consulta: respuesta,
        error: false,
      })
    }
  }
  render() {
    const error = this.state.error;
    let resultado;
    if (error) {
      resultado = <Error mensaje="Both fields are required" />
    }
    // entonces si no hay error, que se ejecute el componente del clima
    else {
      resultado = <Clima resultado={this.state.resultado} />
    }

    return (
      <div>
        <Header titulo="Clima React" />
        <Formulario datosConsulta={this.datosConsulta} />
        {resultado}
        {Clima}
      </div>
    );
  }
}

export default App;
