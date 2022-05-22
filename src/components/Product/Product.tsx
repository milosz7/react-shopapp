import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    }).isRequired).isRequired
};

type Props = PropTypes.InferProps<typeof propTypes>

const Product: React.FC<Props> = ({title, basePrice, colors, sizes, name, id}) => {
  Product.propTypes = propTypes;

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentAdditionalPrice, setCurrentAdditionalPrice] = useState(sizes[0].additionalPrice);

  const fullPrice = useMemo(() => {
    return basePrice + currentAdditionalPrice;
  }, [currentAdditionalPrice, basePrice]);

  return (
    <article key={id} className={styles.product}>
      <ProductImage currentColor={currentColor} name={name} title={title} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {fullPrice}$</span>
        </header>
        <ProductForm
          sizes={sizes}
          title={title}
          actions={[setCurrentAdditionalPrice, setCurrentColor, setCurrentSize]}
          currentSize={currentSize}
          currentColor={currentColor}
          colors={colors}
          price={fullPrice}
        />
      </div>
    </article>
  );
};

export default Product;