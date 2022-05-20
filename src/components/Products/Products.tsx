import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products: React.FC = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          title={product.title}
          colors={product.colors}
          sizes={product.sizes}
          basePrice={product.basePrice}
        />
      ))}
    </section>
  );
};

export default Products;