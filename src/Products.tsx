import { FunctionComponent, useEffect } from "react";
import data from "./data.json";
import DataRetreivalService from "./Services/DataRetrievalService";

const Products: FunctionComponent = () => {
  useEffect(() => {
    // const dataRetrievalService = new DataRetreivalService();
    // const data = dataRetrievalService.requestProducts();
  }, []);

  return (
    <ul className="product-list" data-testid="product-list-testid">
      {data.products.map((washer) => (
        <div key={washer.productId}>{washer.title}</div>
      ))}
    </ul>
  );
};

export default Products;
