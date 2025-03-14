"use client"
import { useState } from "react";
import Dado from "./componentes/dado";

export default function Dadosatv() {

  const [valorDado, setValorDado]= useState(1)

  const numeroAleatorio = ()=>{
    let valor = Math.floor(Math.random()* 6) + 1 
    setValorDado(valor)
  }

  return (
    <div >
      <h1>Lançar o Dado</h1>
      <Dado valor={valorDado}/>
      <button onClick={numeroAleatorio}>Lançar Dado</button>
    </div>
  );
}
