import React, { useState } from 'react';
import './App.css';
import '../../global.css';
import { withRouter } from 'react-router-dom';
import Myheader from '../../components/Header';
import MyAside from '../../components/Aside';
import Produto from '../../components/produto';

function App() {
  const [todosOsProdutos] = useState([
    {
      foto: 'https://images8.kabum.com.br/produtos/fotos/98638/98638_1538485168_index_g.jpg',
      descricao: 'umenda rem amet!descrição  velit e magnam ipsum nulla porro qui ass',
      id: 1,
      tags: ['eletronico', 'video'],
    },
    {
      foto: 'https://www.dentalodonthomaz.com.br/img/products/placa-de-vidro-incolor-6mm-preven_1_1200.jpg',
      descricao: 'umenda rem amet!descrição  velit e magnam ipsum nulla porro qui ass',
      id: 2,
      tags: ['vidro', 'placa'],
    },
    {
      foto: 'https://eclone.com.br/wp-content/uploads/2017/09/geek_nerd_placa.jpg',
      descricao: 'umenda rem amet!descrição  velit e magnam ipsum nulla porro qui ass',
      id: 3,
      tags: ['transito', 'nerd'],
    },
    {
      foto: 'http://workdata.info/wp-content/uploads/2018/08/placa-de-carro.jpg',
      descricao: 'umenda rem amet!descrição  velit e magnam ipsum nulla porro qui ass',
      tags: ['carro', 'velocidade'],
      id: 4,
    },
    {
      foto: 'https://images8.kabum.com.br/produtos/fotos/98638/98638_1538485168_index_g.jpg',
      descricao: 'umenda rem amet!descrição  velit e magnam ipsum nulla porro qui ass',
      id: 5,
      tags: ['eletronico', 'video'],
    },
    {
      foto: 'https://www.dentalodonthomaz.com.br/img/products/placa-de-vidro-incolor-6mm-preven_1_1200.jpg',
      descricao: 'umenda rem amet!descrição  velit e magnam ipsum nulla porro qui ass',
      id: 6,
      tags: ['vidro', 'placa'],
    },
  ]);

  const [produtoRender, setProdutoRender] = useState(todosOsProdutos);
  const [userInput, setUserInput] = useState('');
  const [carrinho, setCarrinho] = useState([]);

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function Filtrar(event) {
    event.preventDefault();
    const produtoComTag = todosOsProdutos.filter((produto) => (
      produto.tags.indexOf(userInput) !== -1
    ));
    setProdutoRender(produtoComTag);
  }

  function mostrarProdutos() {
    setProdutoRender(todosOsProdutos);
    document.querySelector('#carrinhoReset').style.display = 'none';
  }

  function adicionarAoCarrinho(id) {
    const oQueVaiSerAdicionado = todosOsProdutos.filter((produto) => (
      produto.id === id
    ));
    setCarrinho([...oQueVaiSerAdicionado, ...carrinho]);
  }

  function verCarrinho() {
    setProdutoRender(carrinho);
    document.querySelector('#carrinhoReset').style.display = 'block';
  }

  function esvasiarCarrinho() {
    setCarrinho([]);
    verCarrinho();
  }

  return (
    <section>
      <Myheader
        mostrarProdutos={mostrarProdutos}
        verCarrinho={verCarrinho}
        carrinho={carrinho}
        esvasiarCarrinho={esvasiarCarrinho}
      />
      <div className="container-lista">
        <MyAside
          Filtrar={Filtrar}
          handleChange={handleChange}
          todosOsProdutos={todosOsProdutos}
        />
        <div className="container-produtos">
          <Produto
            produtoRender={produtoRender}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        </div>
      </div>
    </section>
  );
}

export default withRouter(App);
