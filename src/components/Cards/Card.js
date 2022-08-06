import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import userServices from '../../services/CatsService';

import '../../assets/scss/cardsStyle/cardsStyle.css';

function CardCats({ cats: { weight, name, temperament, description, life_span } }) {
  const { imperial } = weight;
  return (
    <>
      <li>
        <div>
          <h3>{name}</h3>
          <div>
            <p>
              <span>Temperament: </span>
              {temperament}
            </p>
            <p>
              <span>Peso: </span>
              {imperial}
            </p>
            <p>
              <span>Tempo de vida: </span>
              {life_span}
            </p>
            <p>
              <span>description: </span>
              {description}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

CardCats.propTypes = {
  cats: PropTypes.object,
  catId: PropTypes.string
};

export default CardCats;
