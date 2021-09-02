import { useEffect, useState, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import DataRetreivalService from "./Services/DataRetrievalService";
import ProductDetailsHeader from "./ProductDetailsHeader";

const Details: FunctionComponent = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    //requestProductDetails();
    const dataRetrievalService: DataRetreivalService = new DataRetreivalService();
    const mockProductDetail = dataRetrievalService.requestMockProductDetails(
      productId
    );
    setProductDetail([mockProductDetail]);
  }, []);

  // function requestProductDetails(productId: string) {
  //     const dataRetrievalService = new DataRetreivalService();
  //     const productDetails = dataRetrievalService.requestProductDetails(productId);
  //     setData(productDetails);
  // }

  return (
    <div>
      {productDetail.map((washerDetail) => (
        <div key={washerDetail.productId}>
          <ProductDetailsHeader
            title={washerDetail.title}
          ></ProductDetailsHeader>
        </div>
      ))}
    </div>
  );
};

export default Details;
