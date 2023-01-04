import PropTypes from 'prop-types';

import styles from '../styles/Alert.module.css';

// eslint-disable-next-line arrow-body-style
const Alert = ({ message, close }) => {
  return (
    <div className={styles.alert}>
      <p>{message}</p>
      <button type="button" onClick={close}>x</button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};

export default Alert;
