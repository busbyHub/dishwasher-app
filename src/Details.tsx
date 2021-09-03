import { useEffect, useState, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import DataRetreivalService from "./Services/DataRetrievalService";
import ProductDetailsHeader from "./ProductDetailsHeader";
import ProductDetailsPrice from "./ProductDetailsPrice";

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
    <div className="product-details-page">
      {productDetail.map((washerDetail) => (
        <div key={washerDetail.productId}>
          <ProductDetailsHeader
            title={washerDetail.title}
          ></ProductDetailsHeader>
          <div className="product-detail-container">
            {/* separate to own component with tests */}
            <div className="product-details-image">
              <img
                src={`https:${washerDetail.media.images.urls[0]}?wid=686&hei=915`}
                alt={washerDetail.media.images.altText}
              ></img>
            </div>

            <ProductDetailsPrice
              price={washerDetail.price}
              specialOffer={washerDetail.displaySpecialOffer}
            ></ProductDetailsPrice>

            {/* separate to own component with tests */}
            <div className="product-details-info">
              <h2>Product information</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: washerDetail.details.productInformation,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
