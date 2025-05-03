import PropTypes from 'prop-types';

function Modo({ openNav }) {
  return (
    <>
      <button className="openbtn" onClick={openNav}>
        ☰
      </button>
    </>
  );
}

// Validação de props com PropTypes
Modo.propTypes = {
  openNav: PropTypes.func.isRequired,  // Valida openNav que é uma função e é obrigatória
};

export default Modo;
