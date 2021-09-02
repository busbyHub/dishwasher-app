import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import ProductsHeader from "../ProductsHeader";

test("products header displays correctly with number of items", async () => {
  const productsHeader = render(<ProductsHeader productCount={17} />);
  const productsHeaderEl = await productsHeader.findByTestId(
    "products-header-testid"
  );
  expect(productsHeaderEl.innerHTML).toBe("Dishwashers (17)");
});
