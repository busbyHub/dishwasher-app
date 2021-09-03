import { FunctionComponent } from "react";

interface Props {
  price: { now: string };
  specialOffer?: string;
}

const ProductDetailsPrice: FunctionComponent<Props> = (props) => {
  const { price, specialOffer } = props;

  return (
    <div className="product-details-price-container">
      <h2
        className="product-details-price"
        data-testid="product-details-price-testid"
      >
        £{price.now}
      </h2>
      {specialOffer.length > 0 && (
        <p className="special-offer" data-testid="product-details-offer-testid">
          {specialOffer}
        </p>
      )}
    </div>
  );
};

export default ProductDetailsPrice;
