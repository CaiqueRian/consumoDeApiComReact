import React from "react";

const Formulario = () => {
  return (
    <>
  
    <div className="blocoPrincipal">
        <div className="titulo">
          <h1 id="title">CADASTRO</h1>
        </div>


        <div>
          <label htmlFor="nomeLabel">NOME </label>
          <br />
          <input type="text" id="nomeLabel nome" className="inputPadrao" />
        </div>

        <div>
          <label htmlFor="emailLabel">EMAIL </label>
          <br />
          <input type="email" id="emailLabel" className="inputPadrao"/>
        </div>

        <div>
          <label htmlFor="senhaLabel">SENHA </label>
          <br />
          <input type="password" id="senhaLabel" className="inputPadrao"/>
        </div>

          <div>
            <label htmlFor="cepLabel">CEP </label>
            <br />
            <input type="text" name="" id="cepLabel" className="inputPadrao"/>
          </div>

          <div>
            <label htmlFor="ruaLabel">RUA </label>
            <br />
            <input type="text" id="ruaLabel" className="inputPadrao"/>
          </div>

          <div>
            <label htmlFor="numeroLabel">NUMERO </label><br />
            <input type="text" id="numeroLabel" className="inputPadrao"/>
          </div>


          <div>
            <label htmlFor="bairroLabel">BAIRRO </label>
            <br />
            <input
              type="text" name="" id="bairroLabel" className="inputPadrao"
            />
          </div>

          <div>
            <label htmlFor="cidadeLabel">CIDADE </label>
            <br />
            <input
              type="text"
              name=""
              id="cidadeLabel"
              className="inputPadrao"
            />
          </div>

          <div>
            <label htmlFor="estadoLabel">ESTADO</label>
            <br />
            <input
              type="text"
              name=""
              id="estadoLabel" className="inputPadrao"/>
          </div>
          <div className="botao"><button className="btn">ENVIAR</button></div>
      </div>
    </>
  );
};

const App = () => {
  return <Formulario />;
};

export default App;
