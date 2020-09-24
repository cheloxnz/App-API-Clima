import React from "react";

class Clima extends React.Component {
    mostrarResultado = () => {
        const { name, weather, main } = this.props.resultado;
        console.log(this.props.resultado);
        if (!name) {
            return null;
        }
        else {
            const kelvin = 273.5;
            return (
                <div className="row">
                    <div className=" resultado col s12 m8 l6 offset-l3 ">
                        <div className="card-panel light-blue align-center">
                            <span className="white-text">
                                <h2>Climate result of: {name} </h2>
                                <p className="temperatura">
                                    Current: {(main.temp - kelvin).toFixed(2)} &deg;C
										</p>
                                <p className="temperatura">
                                    Maximum temperature: {(main.temp_max - kelvin).toFixed(2)} &deg;C
										</p>
                                <p className="temperatura">
                                    Minimum temperature: {(main.temp_min - kelvin).toFixed(2)} &deg;C
										</p>
                            </span>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.mostrarResultado()}
            </div>
        );
    }
}

export default Clima;