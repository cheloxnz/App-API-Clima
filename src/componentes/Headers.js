import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper light-blue darken-2">
                        <a className="brand-logo">{this.props.titulo} </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;