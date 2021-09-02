import { FunctionComponent } from "react";

interface Props {
  productCount: number;
}

const ProductsHeader: FunctionComponent<Props> = (props) => {
  return (
    <h1 data-testid="products-header-testid" className="product-header">
      Dishwashers ({props.productCount})
    </h1>
  );
};

export default ProductsHeader;
