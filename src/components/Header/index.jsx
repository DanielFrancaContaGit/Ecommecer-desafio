import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

function MyHeader({ mostrarProdutos, verCarrinho, carrinho, esvasiarCarrinho }) {
  return (
    <header>
      <strong onClick={mostrarProdutos}>A casa das placas</strong>
      <button type="button" onClick={verCarrinho}> </button>
      <div className="marcador">{carrinho.length}</div>
      <button id="carrinhoReset" type="button" onClick={esvasiarCarrinho}>esvasiar carrinho</button>
    </header>
  );
}

MyHeader.propTypes = {
  carrinho: PropTypes.array.isRequired,
  mostrarProdutos: PropTypes.func.isRequired,
  verCarrinho: PropTypes.func.isRequired,
  esvasiarCarrinho: PropTypes.func.isRequired,
};

export default MyHeader;
