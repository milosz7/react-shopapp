import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

type Props = PropTypes.InferProps<typeof propTypes>;

const ProductImage: React.FC<Props> = ({title, name, currentColor}) => {
  ProductImage.propTypes = propTypes;
  return (
    <div className={styles.imageContainer}>
      <img
      className={styles.image}
      alt={title}
      src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
      />
    </div>
   )
}

export default ProductImage;