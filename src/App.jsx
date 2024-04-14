import React from "react";



// Aqui foi criado uma função para pegar os valores do inputs com querySelector e após isso subscrever os inputs ja selecionados com os valores que são retornados da nossa API VIA CEP

function preencherForm(endereco){
  document.querySelector("#ruaLabel").value = endereco.logradouro;
  document.querySelector("#bairroLabel").value = endereco.bairro;
  document.querySelector("#cidadeLabel").value = endereco.localidade;
  document.querySelector("#estadoLabel").value = endereco.uf;
}


let pesquisarCep = async()=>{
  // PARTE 1 : Nessa parte eu fiz uma arrow function assincrona para pegarmos o cep do usuario, e passei esse cep como uma variavel utilizando o template string.
  let cep = document.querySelector("#cepLabel").value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;

  // PARTE 2 : Após isso eu criei uma variavel dados e comecei iniciei a requisição na API com fetch passando nossa url com o cep do usuario, porem ele retorna para a gente uma promessa, porem com o await ele vai esperar ter nossa reposta e inves de retornar uma promessa ja retorna uma reposta para utilização.
  let dados = await fetch(url);

  // PARTE 3: Aqui comecei o tratamento da promessa que foi retornada da API VIA CEP, aqui eu informei que da nossa API VIA CEP eu gostaria de pegar apenas o JSON, por isso criei a variavel endereco e pedi o json de dados.
  let endereco = await dados.json()

  // PARTE 4: Nessa parte eu apenas chamei a função que fizemos na primeira parte que irá subscrever nossos valores dos inputs para os valores que foram pegos da API para cada campo de texto correspondente
  preencherForm(endereco)


}


/* ADICIONAR TRY CATCH */



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
              type="text" name="" id="bairroLabel" onClick={pesquisarCep()} className="inputPadrao"
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
          <div className="botao"><button className="btn" id="btn" onClick={pesquisarCep}>ENVIAR</button></div>
      </div>
    </>
  );
};

const App = () => {
  return <Formulario />;
  
};

export default App;
