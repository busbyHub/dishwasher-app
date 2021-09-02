import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Products from "../Products";

jest.mock("../data.json", () => {
  return {
    products: [
      {
        title: "test-title",
        productId: "123",
        price: { now: "200" },
        image: "imageurl",
        width: 686,
        height: 915,
      },
    ],
  };
});

test("renders list of Dishwashers", async () => {
  const products = render(<Products></Products>);
  const productList = await products.findByTestId("product-list-testid");
  expect(productList.innerHTML).toBe(
    '<li><img alt="test-title" data-testid="image-testid" class="dishwasher-image" src="https:imageurl?wid=686&amp;hei=915"><div class="product-details"><h2 data-testid="details-testid">test-title</h2><p>£200</p></div></li>'
  );
});
