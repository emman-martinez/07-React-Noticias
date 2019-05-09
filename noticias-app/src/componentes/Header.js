import React from 'react';

const Header = (props) => {
    return(
        <nav>
            <div className="nav-wrapper light-blue darken-3">
                <a href="https://newsapi.org/" className="brand-logo center">{props.titulo}</a>
            </div>
        </nav>
    )
}

export default Header;