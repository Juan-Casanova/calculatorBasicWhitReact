import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  // Completar la logica para cada uno de los métodos de este componente de clase
  disminuir() {
    
  }

  aumentar() {

  }

  reset() {
    
  }

  multiplicar() {}

  cuadrado() {}

  render() {
    return (
      <div className="container">
        <h1>Contador</h1>
        <div className="counter-container">
          <h1 className="count">{this.state.contador}</h1>
          {/* Llamar a los métodos para cada uno de los botones */}
          <div className="App">
            <div className="btn btn-prev">-</div>
            <div className="btn btn-next">+</div>
            <div className="btn btn-next">Multiplicar</div>
            <div className="btn btn-next">^2</div>
            <div className="btn btn-reset">RESET</div>
          </div>
        </div>
      </div>
    );
  }
}