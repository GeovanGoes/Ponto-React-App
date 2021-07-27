import { Component } from "react";
import Formulario from "./components/formulario";
import Lista from "./components/lista";


class App extends Component {

  constructor () {
    super();
    this.state = {
      lancamentos: []
    }
  }

  criarLancamento(data, hora, mins) {
    var date = new Date(data.split("-")[0], data.split("-")[1]-1, data.split("-")[2]);

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var diaMesAno = [day, month, year].join('/');

    var horaMins = hora+":"+mins;
    const lancamentos = [horaMins];
    const lancamento = {diaMesAno, lancamentos};
    const novoArray = [...this.state.lancamentos, lancamento];
    this.setState({
      lancamentos: novoArray
    })
  }

  render () {
    return (
      <section>
        <Formulario criarLancamento={this.criarLancamento.bind(this)}/>
        <Lista lancamentos={this.state.lancamentos}/>
      </section>
    );
  }
}

export default App;
