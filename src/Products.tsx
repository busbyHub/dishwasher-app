import { FunctionComponent, useEffect } from "react";
import data from "./data.json";
import DataRetreivalService from "./Services/DataRetrievalService";
import Dishwasher from "./Dishwasher";

const Products: FunctionComponent = () => {
  useEffect(() => {
    // const dataRetrievalService = new DataRetreivalService();
    // const data = dataRetrievalService.requestProducts();
  }, []);

  return (
    <ul className="product-list" data-testid="product-list-testid">
      {data.products.map((washer) => (
        <Dishwasher
          title={washer.title}
          key={washer.productId}
          price={washer.price}
          image={washer.image}
          productId={washer.productId}
          width={686}
          height={915}
        />
      ))}
    </ul>
  );
};

export default Products;
