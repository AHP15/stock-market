import PropTypes from 'prop-types';

import more from '../assets/arrow.png';

import styles from '../styles/DetailItem.module.css';

const DetailItem = ({ title, value, dark }) => (
  <div className={dark ? styles.dark : styles.item}>
    <p className={styles.title}>{title}</p>
    <p>{value}</p>
    <img src={more} alt="arrow" />
  </div>
);

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dark: PropTypes.bool,
};

DetailItem.defaultProps = {
  dark: false,
};
export default DetailItem;
