import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Noticias extends Component {
    render(){
        return(
            <div className="row">
                <TransitionGroup>
                    { /* ***** Componente: Noticia ***** */}
                    { this.props.noticias.map((noticia) => (
                        <CSSTransition
                                        key={noticia.url}
                                        classNames="fade"
                                        timeout={500}
                        >
                            <Noticia
                                        noticia={noticia}
                            ></Noticia>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        )
    }
}

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired,
}

export default Noticias;