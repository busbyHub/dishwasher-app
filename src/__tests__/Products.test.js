import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Products from "../Products";

jest.mock("../data.json", () => {
  return {
    products: [
      {
        title: "test-title",
        productId: "123",
      },
    ],
  };
});

test("renders list of Dishwashers", async () => {
  const products = render(<Products></Products>);
  const productList = await products.findByTestId("product-list-testid");
  expect(productList.innerHTML).toBe("<div>test-title</div>");
});
