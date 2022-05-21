import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const propTypes = {
  actions: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired
}

type Props = PropTypes.InferProps<typeof propTypes>

const ProductForm: React.FC<Props> = ({title, currentSize, currentColor, sizes, colors, actions}) => {
  ProductForm.propTypes = propTypes;

  const [setCurrentAdditionalPrice, setCurrentColor, setCurrentSize, getPrice] = actions;

  const processOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', title)
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <form onSubmit={processOrder}>
      <OptionSize
        colorActions={[setCurrentSize, setCurrentAdditionalPrice]}
        currentSize={currentSize}
        sizes={sizes}
      />
      <OptionColor action={setCurrentColor} colors={colors} currentColor={currentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;