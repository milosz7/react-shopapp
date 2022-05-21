import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
}

type Props = PropTypes.InferProps<typeof propTypes>

const Button: React.FC<Props> = ({className, children}) => {
  Button.propTypes = propTypes;
  return (<button className={clsx(styles.button, className)}>{children}</button>);
};

export default Button;