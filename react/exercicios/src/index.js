import React from "react";
import ReactDOM from "react-dom";
import Filho from "./componentes/filho";
import Pai from "./componentes/pai";
ReactDOM.render(
  <div>
    <Pai nome="marciano" sobrenome="magalhães">
      {/* PASSAT FILHOS FORA DO COMPONENTE */}
      <Filho nome="Pedro" />
      <Filho nome="maria" />
      <Filho nome="marcola" />
    </Pai>
  </div>,
  document.getElementById("root")
);
