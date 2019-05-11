import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    categoriaRef = React.createRef();
    paisRef = React.createRef();

    cambiarCategoria = (e) => {
        e.preventDefault();
        // console.log(this.categoriaRef.current.value);

        // ***** Enviar por props
        this.props.consultarNoticias(this.categoriaRef.current.value, this.paisRef.current.value);

    }

    render() {
        return(
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form action="" onSubmit={this.cambiarCategoria}>
                        <h2>Noticias por Categoría</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoriaRef} name="" id="">
                                <option value="general" defaultValue>General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m8">
                            <select ref={this.paisRef} name="" id="">
                                <option value="mx" defaultValue>México</option>
                                <option value="us">Estados Unidos</option>
                                <option value="ar">Argentina</option>
                                <option value="co">Colombia</option>
                                <option value="ch">Chile</option>
                                <option value="ve">Venezuela</option>
                                <option value="br">Brasil</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="Buscar" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired,
}

export default Formulario;