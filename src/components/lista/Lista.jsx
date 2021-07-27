import React, { Component } from 'react';
import CardLancamento from '../card-lancamento';
import "./style.css";
class Lista extends Component {
    
    render() {
        return (
            
            <ul>{this.props.lancamentos.map((ds, index) => {
              return (
                <li key={index}>
                    <div>{ds.diaMesAno}</div>
                    <CardLancamento horarios={ds.lancamentos}/>
                </li>
              );  
            })}</ul>
        );
    }
}

export default Lista;
