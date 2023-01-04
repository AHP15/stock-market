/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../styles/SymbolCard.module.css';

import more from '../assets/arrow.png';

// eslint-disable-next-line arrow-body-style
const SymbolCard = ({ symbol, company, price, dark, index }) => {
  return (
    <Link
      to={`/details/${symbol}/${index + 1}`}
      className={styles[`${dark ? 'dark' : 'link'}`]}
    >
      <h3 className={styles.symbol}>{symbol}</h3>
      <img src={more} alt="details" className={styles.more} />
      <div className={styles.info}>
        <h4>{company}</h4>
        <p>
          {price}
          $
        </p>
      </div>
    </Link>
  );
};

SymbolCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  dark: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default SymbolCard;
