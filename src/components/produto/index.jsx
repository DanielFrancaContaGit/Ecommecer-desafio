import React from 'react';
import PropTypes from 'prop-types';
import './produto.css';

function Produto({ produtoRender, adicionarAoCarrinho }) {
  return (
    produtoRender.map((produto, i) => (
      <div className="produto" key={i}>
        <img src={produto.foto} alt="placa de video" />
        <div className="produto-footer">
          <p>{produto.descricao}</p>
          <div className="produto-tag">
            <div>
              {produto.tags.join(', ')}
            </div>
            <button type="button" onClick={() => adicionarAoCarrinho(produto.id)}>adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    ))
  );
}

Produto.propTypes = {
  produtoRender: PropTypes.array.isRequired,
  adicionarAoCarrinho: PropTypes.func.isRequired,
};

export default Produto;
