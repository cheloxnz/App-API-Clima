import React from "react";

class Error extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card-panel red darken-4 error">
                            {this.props.mensaje}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;