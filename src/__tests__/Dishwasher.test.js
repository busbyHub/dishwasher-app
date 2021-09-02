import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Dishwasher from "../Dishwasher";
import { StaticRouter } from "react-router-dom";

test("displays image, with correct size and url", async () => {
  const dishwasher = render(
    <StaticRouter>
      <Dishwasher
        title={"Test Dishwasher"}
        price={{ now: "200" }}
        image={"imageurl"}
        productId={"123"}
        width={686}
        height={915}
      />
    </StaticRouter>
  );
  const dishwasherImage = await dishwasher.findByTestId("image-testid");
  expect(dishwasherImage.src).toBe("https://imageurl/?wid=686&hei=915");
});
