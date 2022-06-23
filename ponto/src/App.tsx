import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista';
import { Container } from '@mui/material';
import { Dia } from './types/dia';
import Formulario from './components/Formulario';
import api from './services/api';
import { Semana } from './types/semana';

function App() {

  console.log("render");
  const [dias, setDias] = useState<Dia[] | []>([]);
  const [weeks, setWeeks] = useState<Semana[] | []>([]);

  function converterResponse (response: any) {
    var ds = response.data as Dia[];
    var semanas: Semana[] = [];
    
    ds.forEach(item => {
      var index = semanas.findIndex(s => s.ano === item.data.split('-')[2] && s.numeroDaSemana === item.numeroDaSemana);
      var semana;
      if (index < 0) {
        semana = {ano: item.data.split('-')[2], dias: [], numeroDaSemana: item.numeroDaSemana};
      }
      else 
        semana = semanas[index];

      semana.dias.push(item);
      
      if (index < 0)
        semanas.push(semana);
      else 
        semanas[index] = semana;
    });
    console.log("semanas", semanas);
    setDias(ds);
  }
  useEffect(() => {
    api.get('/api/lancamentos?email=geovansilvagoes@gmail.com')
    .then((response) => converterResponse(response))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [])

  
  return (
    <Container maxWidth="sm">
      <Formulario/>
      <Lista dias={dias} semanas={weeks}/>
    </Container>
  );
}

export default App;
