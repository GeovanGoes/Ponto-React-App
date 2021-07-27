import React, { Component } from 'react';


class Formulario extends Component {



    constructor(props) {
        super(props);
        this.data = "";
        this.hora = "";
        this.minuto = "";
    }

    _handleMudancaMins(evento) {
        this.minuto = evento.target.value;
        console.log(this.minuto);
    }

    _handleMudancaHora(evento) {
        this.hora = evento.target.value;
        console.log(this.hora);
    }

    _handleMudancaData(evento) {
        this.data = evento.target.value;
        console.log(this.data);
    }

   _submitFormulario(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Submitou");
        this.props.criarLancamento(this.data, this.hora, this.minuto);
    }

    render() {
        return (
            <form onSubmit={this._submitFormulario.bind(this)}>
                <input type="date" placeholder="data" onChange={ this._handleMudancaData.bind(this) } />
                <input type="text" placeholder="hora" onChange={ this._handleMudancaHora.bind(this) }/>
                <input type="text" placeholder="mins" onChange={ this._handleMudancaMins.bind(this) }/>
                <button>Criar</button>
            </form>
        );
    }
}

export default Formulario;