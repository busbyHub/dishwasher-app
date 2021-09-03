import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const ProductDetailsHeader: FunctionComponent<Props> = (props) => {
  return (
    <div className="product-details-header">
      <Link to={`/`}>
        <img src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="50" height="100" viewBox="0 0 150 225"  xml:space="preserve"><path d="M33.3,46.6L61.4,3.8l5.9,3.9L46.1,46.4c-1.1,2.1-1.1,4.6,0,6.7l21.2,38.7l-5.9,3.9L33.3,52.9C32,51,32,48.5,33.3,46.6z"/></svg>' />
      </Link>
      <h1 className="product-header" data-testid="product-details-title-testid">
        {props.title}
      </h1>
    </div>
  );
};

export default ProductDetailsHeader;
