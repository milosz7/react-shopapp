import styles from './Container.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
}

interface Props {
  children: JSX.Element[];
}

const Container: React.FC<Props> = ({ children }) => {
  Container.propTypes = propTypes;
  return (
      <div className={styles.container}>
          {children}
      </div>
  );
};

export default Container;