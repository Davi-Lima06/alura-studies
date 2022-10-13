import React, { useState } from 'react';
import Cronometro from '../componentes/cronometro';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/lista';
import ITarefa from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
