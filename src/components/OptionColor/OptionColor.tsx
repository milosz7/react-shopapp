import clsx from "clsx";
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  action: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>


const OptionColor: React.FC<Props> = ({colors, currentColor, action}) => {
  OptionColor.propTypes = propTypes;

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors.map((color) => {
          const colorClassSuffix = `color${color.charAt(0).toUpperCase() + color.slice(1)}`;
          return (
            <li key={color}>
              <button
                type="button"
                onClick={() => action(color)}
                className={clsx(styles[colorClassSuffix], currentColor === color && styles.active)}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OptionColor;
