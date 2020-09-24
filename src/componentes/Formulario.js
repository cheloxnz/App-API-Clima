import React from "react";

class Formulario extends React.Component {
    ciudadRef = React.createRef();
    paisRef = React.createRef();

    buscarClima = (e) => {
        e.preventDefault();

        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value,
        }
        this.props.datosConsulta(respuesta);
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima} >
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudadRef} id="ciudad" type="text" />
                                <label htmlFor="ciudad">City:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef} >
                                    <option value="" defaultValue>Choose a country</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">Mexico</option>
                                    <option value="PE">Peru</option>
                                </select>
                                <label htmlFor="pais">Country: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4"
                                    value="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formulario;