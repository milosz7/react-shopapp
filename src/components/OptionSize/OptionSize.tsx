import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  colorActions: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
  currentSize: PropTypes.string.isRequired
};

type Props = PropTypes.InferProps<typeof propTypes>

const OptionSize: React.FC<Props> = ({sizes, currentSize, colorActions}) => {
  OptionSize.propTypes = propTypes;

  const [setCurrentSize, setCurrentAdditionalPrice] = colorActions;
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map(({name, additionalPrice}) => (
          <li key={name}>
            <button
              onClick={() => {
                setCurrentSize(name);
                setCurrentAdditionalPrice(additionalPrice)
              }}
              className={clsx(currentSize === name && styles.active)}
              type="button"
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionSize;