import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    
    super();
    
    this.state = {
      contador: 0
    };

    this.reset = this.reset.bind(this);
    this.multiplicar = this.multiplicar.bind(this);

  }

  // Completar la logica para cada uno de los métodos de este componente de clase
  disminuir = () => {
    let contador = this.state.contador;

    if(contador>0) {
      contador--
    }

    this.setState({contador: contador})
  }

  aumentar = () => {
      let contador = this.state.contador;
      
      contador++;
      
      this.setState({contador:contador})
  }

  reset() {
    this.setState({contador:0})
  }

  multiplicar() {
    let contador = this.state.contador;

    if(contador%2===0)
    {
      contador = contador*2;
    }else {
      contador = contador*3;
    }

    this.setState({contador:contador})
  }

  cuadrado() {

  }

  render() {
    return (
      <div className="container">
        <h1>Contador</h1>
        <div className="counter-container">
          <h1 className="count">{this.state.contador}</h1>
          {/* Llamar a los métodos para cada uno de los botones */}
          <div className="App">
            <div className="btn btn-prev" onClick={this.disminuir}>-</div>
            <div className="btn btn-next" onClick={this.aumentar}>+</div>
            <div className="btn btn-next" onClick={this.multiplicar}>Multiplicar</div>
            <div className="btn btn-next">^2</div>
            <div className="btn btn-reset" onClick={this.reset}>RESET</div>
          </div>
        </div>
      </div>
    );
  }
}
