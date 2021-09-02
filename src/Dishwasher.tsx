import { FunctionComponent } from "react";

interface Props {
  image: string;
  title: string;
  price: { now: string };
  productId: string;
  width: number;
  height: number;
}

const Dishwasher: FunctionComponent<Props> = (props) => {
  const { title, price, image, width, height } = props;

  return (
    <li>
      <img
        alt={title}
        data-testid="image-testid"
        className="dishwasher-image"
        src={`https:${image}?wid=${width}&hei=${height}`}
      />
      <div className="product-details">
        <h2 data-testid="details-testid">{title}</h2>
        <p>£{price.now}</p>
      </div>
    </li>
  );
};
export default Dishwasher;
