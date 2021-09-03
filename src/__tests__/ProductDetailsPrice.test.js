import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import ProductDetailsPrice from "../ProductDetailsPrice";

test("product price displays", async () => {
  const productDetailsPrice = render(
    <ProductDetailsPrice price={{ now: "300" }} specialOffer={""} />
  );
  const productDetailsPriceEl = await productDetailsPrice.findByTestId(
    "product-details-price-testid"
  );
  expect(productDetailsPriceEl.innerHTML).toBe("£300");
});

test("product details special offer displays if available", async () => {
  const productDetailsPrice = render(
    <ProductDetailsPrice
      price={{ now: "300" }}
      specialOffer={"Special Offer"}
    />
  );
  const productDetailsPriceEl = await productDetailsPrice.findByTestId(
    "product-details-offer-testid"
  );
  expect(productDetailsPriceEl.innerHTML).toBe("Special Offer");
});
