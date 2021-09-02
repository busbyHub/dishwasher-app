import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import ProductDetailsHeader from "../ProductDetailsHeader";
import { StaticRouter } from "react-router-dom";

test("products header displays with correct title", async () => {
  const productDetailsHeader = render(
    <StaticRouter>
      <ProductDetailsHeader title={"Test Title"} />
    </StaticRouter>
  );
  const productDetailsHeaderEl = await productDetailsHeader.findByTestId(
    "product-details-title-testid"
  );
  expect(productDetailsHeaderEl.innerHTML).toBe("Test Title");
});
