import React from 'react';
import PropTypes from 'prop-types';
import './aside.css';

function MyAside({ Filtrar, handleChange, todosOsProdutos }) {
  return (
    <aside>
      <form className="filtro" onSubmit={Filtrar}>
        <button type="submit"> </button>
        <input type="text" placeholder="Filtrar por tag" onChange={handleChange} />
      </form>
      <div className="container-tag">
        <ul>
          {todosOsProdutos.map((produto) => (
            produto.tags.map((tag) => (
              <li>{tag}</li>
            ))
          ))}
        </ul>
      </div>
    </aside>
  );
}

MyAside.propTypes = {
  Filtrar: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  todosOsProdutos: PropTypes.array.isRequired,
};

export default MyAside;
