import { FunctionComponent, useEffect, useState } from "react";
import DataRetreivalService from "./Services/DataRetrievalService";
import Dishwasher from "./Dishwasher";
import ProductsHeader from "./ProductsHeader";

const Products: FunctionComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // requestDishwasherData();
    const dataRetrievalService = new DataRetreivalService();
    const mockProducts = dataRetrievalService.requestMockProducts();
    setData(mockProducts);
  }, []);

  //   function requestDishwasherData() {
  //     const dataRetrievalService = new DataRetreivalService();
  //     const products = dataRetrievalService.requestProducts();
  //     setData(products);
  //   }

  return (
    <div>
      <ProductsHeader productCount={data.length}></ProductsHeader>
      <ul className="product-list container" data-testid="product-list-testid">
        {data.map((washer) => (
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
    </div>
  );
};

export default Products;
