import React, { Component } from 'react';
import "./style.css";

class CardLancamento extends Component {
    render() {
        return (
            <div>{this.props.horarios.map((item, index) => {
                return (
                    <section className="card-lancamento" key={index}>
                    <header>
                        <h3>{item}</h3>
                    </header>
                </section>
                );
            })}
            </div>
        );
    }
}

export default CardLancamento;